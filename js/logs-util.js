let logData;

/** Initializes list of log entries. */
async function initializeLogEntries() {
    await waitForAllLogData()
    let tags = new Set()
    
    for (let log of logData) {
        for (let logTag of log.tags) {
            tags.add(logTag);
        }
    }
    
    initializeFilters(tags)
    displayLogs(tags)
}

/** Initializes all possible filters from log data. */
function initializeFilters(tags) {
    const filtersContainer = document.getElementById("filters-container");

    const urlParams = new URLSearchParams(window.location.search);
    const searchTags = urlParams.get("tags")?.split(",") ?? [];

    let sortedTags = Array.from(tags).sort((a, b) => { return a > b})

    for (let tag of sortedTags) {
        let label = document.createElement("label");
        let input = document.createElement("input");
        let span = document.createElement("span");

        input.className = "filter";
        input.type = "checkbox";
        input.id = tag;
        input.name = "checkbox";

        if (searchTags.length <= 0) {
            input.checked = true;
        } else if (searchTags.includes(tag)) {
            input.checked = true
        }

        span.textContent = tag.toUpperCase();
        span.className = "filter-name";

        label.appendChild(input);
        label.appendChild(span);

        filtersContainer.appendChild(label);

        input.onclick = function () {
            displayLogs(tags);

            let setTags = []
            for (let tag of tags) {
                if (document.getElementById(tag).checked === true) {
                    setTags.push(tag)
                }
            }
            const newUrl = new URL(window.location.href)
            newUrl.searchParams.set('tags', setTags);
            window.history.pushState(null, '', newUrl.toString())
        };
    }
}

/** Display logs. */
function displayLogs(tags) {
    const logsWrapper = document.getElementById("entries-wrapper");
    logsWrapper.innerHTML = "";
    let filteredLogs = logData;

    // filter logs
    filteredLogs = logData.filter((entry) => {
        for (let tag of tags) {
            let input = document.getElementById(tag);
            if (input.checked === true && entry.tags.includes(tag)) {
                return true;
            }
        }
        return false;
    });

    for (let entry of filteredLogs) {
        logsWrapper.appendChild(createLogListEntry(entry));
    }

    var nothingHere = document.getElementById("nothing-here");
    if (filteredLogs.length <= 0) {
        nothingHere.style.display = "block";
    } else {
        nothingHere.style.display = "none";
    }
}

/** Creates a log list entry element. */
function createLogListEntry(entry) {
    let logListEntry = document.createElement("log-list-entry");
    logListEntry.setAttribute("link", entry.link)
    logListEntry.setAttribute("title", entry.title);
    if (entry.cover) {
        logListEntry.setAttribute("cover", entry.cover);
    }
    logListEntry.setAttribute("date", entry.timestamp);

    let logListEntryTags = entry.tags.sort((a, b) => a > b)
    logListEntry.setAttribute("tags", logListEntryTags);
    return logListEntry;
}

/** GETTER FUNCTIONS */
const getLogsData = async() => {
    if (!logData) {
        const res = await fetch('/json/logs.json');
        const data = await res.json();
        logData = data.logs.sort((a, b) => {
            return new Date(b.timestamp) > new Date(a.timestamp);
        });
    }
    return logData;
}
const waitForAllLogData = async() => {
    if (!logData) {
        const res = await fetch('/json/logs.json');
        const data = await res.json();
        logData = data.logs.sort((a, b) => {
            return new Date(b.timestamp) > new Date(a.timestamp);
        });
    }
}
const waitForAllLogTags = async() => {
    if (tags.size <= 0) {
        const logs = await getLogsData();
        for (let log of logs) {
            for (let logTag of log.tags) {
                tags.add(logTag);
            }
        }
    }
}
const getLatestLogEntry = async() => {
    const logs = await getLogsData();
    return logs[0];
}
const getLogEntryById = async(id) => {
    const logs = await getLogsData();
    return logs.find((log) => log.id === id);
}