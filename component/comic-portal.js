class ComicPortal extends HTMLElement {
    static observedAttributes = ["link", "title", "description", "img", "color"];

    constructor() {
      super();
    }

    connectedCallback() {
    let title = "";
    if (this.hasAttribute("title")) {
        title = this.getAttribute("title");
    }

    let img = "/#";
    if (this.hasAttribute("img")) {
        img = this.getAttribute("img");
    }

    let link = "/#";
    if (this.hasAttribute("link")) {
        link = this.getAttribute("link");
    }

    let color = "rgb(0, 0, 0)";
    if (this.hasAttribute("color")) {
      color = this.getAttribute("color");
  }

    let description = "";
    if (this.hasAttribute("description")) {
      description = this.getAttribute("description");
  }


    this.innerHTML = `
    <div style="width: 90%; margin: auto">
      <div class="comic-border-container">
        <div
        class="comic-container" style="background-color: ${color};"
        >
          <div style="flex: 1">
            <a href="${link}"><img src="${img}" class="comic-cover" /></a>
            </div>
            <div style="flex: 1">
            <div class="comic-info"
            >
            <h3><a class="comic-title" href="${link}">${title}</a></h3>
            <div>${description}</div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
    }

  }

  customElements.define('comic-portal', ComicPortal);
  