const getImageData = async() => {
    const res = await fetch('/json/imagedata.json');
    const data = await res.json();
    return data;
}

class Modal {
    constructor({modalCore, gridElement, sources, smallScreenEnabled}) {
        this.smallScreenWidth = 600;

        this.gridId = gridElement.id;
        this.gridElement = gridElement;
        this.sources = sources;
        this.curr = -1;
        this.disabled = false;

        this.viewSources = [...sources];
        this.loadedImages = {};
        
        // MODAL ELEMENTS
        this.modalCore = modalCore;
        this.modalElement = document.getElementById("modal");
        this.infoElement = document.getElementById("modal-info");
        this.imgElement = document.getElementById("modal-image");
        this.titleElement = document.getElementById("modal-title");
        this.descElement = document.getElementById("modal-desc");
        this.tagsElement = document.getElementById("modal-tags");

        // MODAL BUTTONS
        this.prevButton = document.getElementById("modal-prev");
        this.nextButton = document.getElementById("modal-next");
        this.randButton = document.getElementById("modal-random-button");
        this.exitButton = document.getElementById("modal-exit-button");

        var self = this;
        if (!smallScreenEnabled) {
            self.setModalAllowed();
            addEventListener("resize", function () {
                self.setModalAllowed();
            });
        }

        // MODAL EVENTS
        self.onModalOpen = () => {};
        self.onModalClose = () => {};
    }

    /** 
     * Initializes with dynamic grid with variable width and height. 
     * @param sizeGoal minimum height for row
     */
    initializeWithDynamicGrid(sizeGoal, smallSizeGoal) {
        var self = this;
        this.sizeGoal = sizeGoal;
        this.smallSizeGoal = smallSizeGoal;

        self.refreshGrid = () => {};

        const imageDataPromise = getImageData();
        imageDataPromise.then((imageData) => {
            self.loadedImages = imageData;

            self.initializeFunctionality();
            self.generateDynamicGrid(this.sizeGoal);
    
            addEventListener("resize", function () {
                self.refreshGrid();
            });
            self.refreshGrid = () => {
                self.generateDynamicGrid(this.sizeGoal)
            }
        });

    }

    /** 
     * Initializes with static grid with fixed width and height for each cell. 
     * @param width target width for cell
     * @param height target height for cell
     */
    initializeWithStaticGrid(width, height) {
        var self = this;
        this.generateStaticGrid(width, height);
        this.initializeFunctionality();

        this.refreshGrid = () => { self.generateStaticGrid(width, height) }
    }

    /** Initialize buttons and shortcut functionality */
    initializeFunctionality() {
        this.setupButtons();
        this.setupShortcuts();
    }

    /** 
     * Generates static grid. 
     * @param width target width for cell
     * @param height target height for cell
     */
    generateStaticGrid(width, height) {
        var self = this;
        this.gridElement.innerHTML = '';
        this.gridElement.classList.add("static-grid");

        for (let i = 0; i < this.viewSources.length; i++) {
            let cell = document.createElement("div");
            cell.className = "static-grid-cell grid-cell";
            cell.style.width = `${width}px`;
            cell.style.height = `${height}px`;

            var effect = document.createElement("div");
            effect.className = "static-grid-cell-effect grid-cell-effect";
            cell.appendChild(effect);

            let img = document.createElement("img");

            img.src = this.viewSources[i].img;
            img.className = "static-grid-image grid-image";

            let btn = document.createElement("button");
            btn.className = "static-grid-button grid-button";

            btn.onclick = function () {
                self.setModal(i);
            };

            cell.appendChild(btn);
            cell.appendChild(img);
            this.gridElement.appendChild(cell);
          }
    }

    /** 
     * Generates with dynamic grid. 
     * @param sizeGoal minimum height for row
     */
    generateDynamicGrid(sizeGoal) {
        var self = this;
        
        if (this.isSmallScreen()) {
            sizeGoal = self.smallSizeGoal ?? self.smallScreenWidth;
        }

        /**
         * Adds item to row.
         * Returns image.
         */
        function addItem(imgSrc, index, row) {
            let cell = document.createElement("div");
            cell.className = "dynamic-grid-cell grid-cell";

            var effect = document.createElement("div");
            effect.className = "dynamic-grid-cell-effect grid-cell-effect";
            cell.appendChild(effect);

            let img = document.createElement("img");

            img.src = imgSrc;
            img.className = "dynamic-grid-image grid-image";

            let btn = document.createElement("button");
            btn.className = "dynamic-grid-button grid-button";

            btn.onclick = function () {
                self.setModal(index);
            };

            cell.appendChild(btn);
            cell.appendChild(img);
            row.appendChild(cell);
            return img;
        }
  
        /** Adds row to grid */
        function addRow(endRow = false) {
            let itemSizesSum = calculateScale()[0];
            let itemHeight = (document.body.scrollWidth) / itemSizesSum;
            row.style.height = `${itemHeight}px`;
            itemWidthScales = [];

            row.style.display = "flex";
            row.className = endRow ? "dynamic-grid-row dynamic-grid-end-row" : "dynamic-grid-row";
            row.style.maxHeight = `${sizeGoal}px`;
            self.gridElement.appendChild(row);
            row = document.createElement("div");

            return itemHeight;
        }
  
        /**
         * Calculates row scale.
         * Lower sums = bigger height
         * More items increases the sum, and lowers the height.
         * Returns the sum and whether or not it is of acceptable height.
         */
        function calculateScale() {
            let itemSizesSum = 0;
            itemWidthScales.forEach((itemSize) => {
                itemSizesSum += itemSize;
            });

            let itemHeight = window.innerWidth / itemSizesSum;
            let acceptable = true;
            if (itemHeight > sizeGoal) {
                acceptable = false;
            }

            return [itemSizesSum, acceptable];
        }

        // Clears grid
        self.gridElement.style.minHeight = `${self.gridElement.offsetHeight}px`;
        self.gridElement.textContent = "";

        self.gridElement.classList.add("dynamic-grid");
        var row = document.createElement("div");
        var itemWidthScales = [];

        // Iterates through all sources
        let currGridHeight = 0;
        for (let i = 0; i < self.viewSources.length; i++) {
          if (calculateScale()[1] == true) {
            currGridHeight += addRow();
          }

            let imgSrc = self.viewSources[i].img;
            let strippedImgSrc = imgSrc;
            if (strippedImgSrc.charAt(0) === '/') {
                strippedImgSrc = strippedImgSrc.substring(1);
            }
            if (this.loadedImages[strippedImgSrc]) {
                const loadedImage = this.loadedImages[strippedImgSrc];
                addItem(imgSrc, i, row);
                itemWidthScales.push(loadedImage.width * (1 / loadedImage.height));
            }
          
        }
        addRow(true);
        self.gridElement.style.minHeight = `${currGridHeight}px`;
    }

    /** Sets up modal buttons. */
    setupButtons() {
        var self = this;

        // prev modal
        this.prevButton.onclick = function () {
            self.resetButtons();
            self.prevModal();
        };

        // next modal
        this.nextButton.onclick = function () {
            self.resetButtons();
            self.nextModal();
        };

        // random modal
        if (this.randButton) {
            this.randButton.onclick = function() {
                self.randomModal();
            }
        }

        // exit modal
        this.exitButton.onclick = function () {
            self.exitModal();
        };
    }

    /** Sets up arrow key and random shortcuts. */
    setupShortcuts() {
        var self = this;
        document.onkeydown = function(e) {
            if (self.curr != -1) {
                if (e.key == 'ArrowLeft') {
                    self.prevModal();
                    self.nextButton.classList.remove("arrow-down");
                    self.prevButton.classList.add("arrow-down");
                }
                else if (e.key == 'ArrowRight') {
                    self.nextModal()
                    self.prevButton.classList.remove("arrow-down");
                    self.nextButton.classList.add("arrow-down");
                }
            }
            if (e.key == 'r') {
                self.randomModal();
            }
        };
    }

    /** Sets modals to current number. */
    setModal(num) {
        // Kinda hacky but works for now
        this.setupButtons();
        this.setupShortcuts();

        let heightBuffer = 0;

        if (this.disabled) return;
        if (num == -1) {
            this.onModalClose();

            this.titleElement.textContent = "";
            this.descElement.textContent = "";

            this.modalElement.style.display = "none";
            this.prevButton.disabled = true;
            this.curr = -1;
        } else {
            this.onModalOpen();

            // set tags
            if (this.viewSources[num].tags) {
                this.tagsElement.style.display = "flex";
                this.tagsElement.innerHTML = "";
                for (let tag of this.viewSources[num].tags) {
                    let tagSpan = document.createElement("span");
                    tagSpan.textContent = tag.toUpperCase();
                    this.tagsElement.appendChild(tagSpan);
                }
            } else {
                this.tagsElement.innerHTML = "";
                this.tagsElement.style.display = "none";
            }

            // set title and desc
            this.titleElement.textContent = this.viewSources[num].title;
            this.descElement.innerHTML = this.viewSources[num].desc;

            if (!this.viewSources[num].title) {
                this.titleElement.style.display = "none";
            } else {
                this.titleElement.style.display = "block";
            }

            if (!this.viewSources[num].desc) {
                this.descElement.style.display = "none";
            } else {
                this.descElement.style.display = "block";
            }

            // set info section visibility
            if (!this.viewSources[num].title && !this.viewSources[num].desc && !this.viewSources[num].tags) {
                this.infoElement.style.display = "none";
            } else {
                this.infoElement.style.display = "flex";
            }

            this.imgElement.src = this.viewSources[num].img;
            this.modalElement.style.display = "block";
            this.curr = num;

            // set buttons
            if (this.curr == 0) {
                this.prevButton.disabled = true;
            } else {
                this.prevButton.disabled = false;
            }

            if (this.curr == this.viewSources.length - 1) {
                this.nextButton.disabled = true;
            } else {
                this.nextButton.disabled = false;
            }

            heightBuffer += this.infoElement.offsetHeight;
            if (this.isSmallScreen()) {
                heightBuffer += 120;
            }
            this.imgElement.style.maxHeight = `calc(100% - ${heightBuffer}px)`;
        }
    }

    /** Sets modals to previous. */
    prevModal() {
        if (this.curr > 0) {
            this.setModal(this.curr - 1);
        }
    }

    /** Sets modals to next. */
    nextModal() {
        if (this.curr < this.viewSources.length - 1) {
            this.setModal(this.curr + 1);
        }
    }

    /** Sets random modal. */
    randomModal() {
        this.setModal(Math.floor(Math.random() * this.viewSources.length));
    }

    /** Exits modal. */
    exitModal() {
        this.setModal(-1);
        this.resetButtons();
    }

    /** Resets modal buttons. */
    resetButtons() {
        this.nextButton.classList.remove("arrow-down");
        this.prevButton.classList.remove("arrow-down");
    }

    /** Returns whether or not the window is a small screen. */
    isSmallScreen() {
        return (window.innerWidth <= this.smallScreenWidth);
    }

    /** Sets whether or not the modal is enabled. */
    setModalAllowed() {
        if (this.isSmallScreen()) {
            this.disableModal();
        } else {
            this.enableModal();
        }
    }

    /** Disables the modal. */
    disableModal() {
        this.disabled = true;
        this.gridElement.classList.add("disabled-grid");
    }

    /** Enables the modal. */
    enableModal() {
        this.disabled = false;
        this.gridElement.classList.remove("disabled-grid");
    }

    /** Updates the modal sources and refreshes. */
    updateSources(sources) {
        this.viewSources = sources;
        this.refreshGrid();
    }

    /** Sets an event to run whenever the modal is opened. */
    setOnModalOpenEvent(lambda) {
        this.onModalOpen = () => lambda();
    }

    /** Sets an event to run whenever the modal is closed. */
    setOnModalCloseEvent(lambda) {
        this.onModalClose = () => lambda();
    }
}