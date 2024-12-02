class LogListEntry extends HTMLElement {
    static observedAttributes = ["title", "link", "cover", "date", "tags"];

    constructor() {
      super();
    }

    connectedCallback() {
        /** ATTRIBUTES */
        let title = "N/A";
        if (this.hasAttribute("title")) {
            title = this.getAttribute("title");
        }
        let link = "/#";
        if (this.hasAttribute("link")) {
            link = this.getAttribute("link");
        }
        let cover = "/img/default-log-cover.png";
        if (this.hasAttribute("cover")) {
            cover = this.getAttribute("cover");
        }
        let date = "N/A";
        if (this.hasAttribute("date")) {
            date = this.getAttribute("date");
        }
        let tags = [];
        if (this.hasAttribute("tags")) {
            tags = this.getAttribute("tags").split(",")
        }

        /** HTML */
        this.className = "entry";
        this.innerHTML = "";
        let header = document.createElement("div");

        header.className = "entry-header";
        header.style.background = `linear-gradient(15deg, rgba(0,37,37,1) 30%, rgba(0,0,0,0) 100%), url(${cover})`;
        header.style.backgroundBlendMode = "multiply";
        header.style.backgroundSize = "100%";
        header.style.backgroundPositionY = "50%";
        
        // Top Bar
        let topBar = document.createElement("div");
        topBar.className = "entry-top-bar";
        this.appendChild(topBar);

        // Title, Date, Tags
        let tagsDiv = document.createElement("div");
        tagsDiv.className = "entry-tags";
        for (let tag of tags) {
            let tagSpan = document.createElement("span");
            tagSpan.className = "entry-tag";
            tagSpan.textContent = "#"+tag;
            tagsDiv.appendChild(tagSpan);
        }

        let titleDiv = document.createElement("div");
        titleDiv.className = "entry-title";
        titleDiv.textContent = title;

        let dateElement = document.createElement("div");
        dateElement.className = "entry-date";

        let dateObj = new Date(date);

        dateElement.textContent = `${dateObj.toLocaleDateString() +", "+ dateObj.toLocaleString([], {hour: 'numeric', minute: '2-digit'})}`;

        header.appendChild(dateElement);
        header.appendChild(titleDiv);
        header.appendChild(tagsDiv);

        // Link
        let linkWrapper = document.createElement("a");
        linkWrapper.className = "entry";
        linkWrapper.href = link;
        linkWrapper.appendChild(header);

        this.appendChild(linkWrapper);
    }

  }

  customElements.define('log-list-entry', LogListEntry);
  