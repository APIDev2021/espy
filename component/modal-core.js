class ModalCore extends HTMLElement {
    static observedAttributes = [];

    constructor() {
      super();
    }

    connectedCallback() {
      this.innerHTML = `
        <div id="modal">
          <div id="modal-wrapper">     
            <button class="modal-nav" id="modal-prev">◀</button>
            <div id="modal-container">
                <button id="modal-exit-button"><p id="exit-text">X</p></button>     
                <img id="modal-image" />  
                <div id="modal-info">
                  <div id="modal-tags"></div>
                  <p id="modal-title"></p>
                  <p id="modal-desc"></p>
                </div>
            </div>
            <button class="modal-nav" id="modal-next">▶</button>
          </div>

        </div>
        <div id="modal-grid"></div>`;
    }

  }

  customElements.define('modal-core', ModalCore);
  