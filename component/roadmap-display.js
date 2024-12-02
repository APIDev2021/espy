class RoadmapDisplay extends HTMLElement {
    static observedAttributes = ["type"];

    constructor() {
      super();
    }

    connectedCallback() {

        let type = "updates";
        if (this.hasAttribute("type")) {
            type = this.getAttribute("type");
        }

        if (type == "updates") {
            this.innerHTML = `
            <ul>
                <li>Add more to "ABOUT THE WEBMASTER"</li>
                <li>Implement pagination throughout the site</li>
                <li>Comics navigation and individual comic pages revamp (improve layout, ability to switch reading styles, etc.)</li>
                <li>Implement local storage (for settings) 
                    <ul style="margin: 0">
                        <li>Reduced motion accessibility settings</li>
                        <li>Implement sound with audio settings</li>
                    </ul>
                </li>
                <li>Improve image loading (optimization, prevent layout shifting, transitions, etc.)</li>
            </ul>`;
        } else if (type == "issues") {
            this.innerHTML = `
            <ul>
                <li>Home cursor is so ever slightly offset by a few pixels and for the life of me I cannot figure out why so help me god.</li>
			</ul>`
        }
    }

  }

  customElements.define('roadmap-display', RoadmapDisplay);
  