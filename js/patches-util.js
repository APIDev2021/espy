const getPatchesData = async() => {
    const res = await fetch('/json/patches.json');
    const data = await res.json();
    let patches = data.patches.sort((a, b) => {
        return new Date(b.date) > new Date(a.date);
    });
    return patches;
}

function displayPatches() {
    let patchesPromise = getPatchesData();
    patchesPromise.then((patches) => {
        const patchesWrapper = document.getElementById("patches-wrapper");

        for (let patch of patches) {
            let details = document.createElement("details");
            let summary = document.createElement("summary");
    
            let ul = document.createElement("ul");
            for (let c of patch.content) {
                let li = document.createElement("li");
                li.textContent = c;
                ul.appendChild(li);
            }
    
            summary.textContent = new Date(patch.date).toLocaleDateString("en-US");
            details.appendChild(summary);
            details.appendChild(ul);
            details.open = true;
    
            patchesWrapper.appendChild(details);
        }
    });
}

// gets the latest individual patches
const getLatestPatches = async(num) => {
    const patches = await getPatchesData();
    const patchList = [];
    let count = 0;

    for (let patch of patches) {
        const content = patch.content.reverse()
        for (let item of content) {
            const patchItem = [];
            patchItem[0] = patch.date;
            patchItem[1] = item;
            patchList.push(patchItem);
            count = count + 1;
            if (count >= num) {
                return patchList;
            }
        }
    }

    return patchList;
}