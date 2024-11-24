class Carroussel extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <style>
            .carousel {
                position: relative;
                width: 100%;
                max-width: 90%;
                margin: auto;
                overflow: hidden;
                border-radius: 5px;
                z-index: 0;
                margin-top: 20px;
            }
            .carousel img {
                width: 100%;
                position: absolute;
                opacity: 0;
                transition: opacity 1s ease-in-out;
                border-radius: 5px;
            }
            .carousel img.active {
                opacity: 1;
                position: relative;
            }
            .carousel-controls {
                position: absolute;
                top: 50%;
                width: 100%;
                display: flex;
                justify-content: space-between;
                transform: translateY(-50%);
            }
            .carousel-controls button {
                background: none;
                border: none;
                padding: 10px;
                cursor: pointer;
                transition: 0.3s ease-in-out;
            }
            .carousel-controls button:hover {
                transform: scale(1.2);
            }
            .carousel-controls button:nth-child(1) {
                transform: rotate(180deg);
            }
            .carousel-controls button:nth-child(1):hover {
                transform: rotate(180deg) scale(1.2);
            }
            .progress-bar-container {
                display: flex;
                justify-content: center;
                margin-top: 10px;
            }
            .progress-bar {
                width: 15px;
                height: 15px;
                margin: 0 5px;
                border-radius: 50%;
                border: 2px solid var(--darkGreen);
                background-color: var(--background-color);
                transition: background-color 0.3s;
            }
            .progress-bar.active {
                background-color: #107C10;
            }
        </style>
        <div class="carousel">
            <img src="../../images/carroussel/Banner1.png" class="active" alt="Image 1">
            <img src="../../images/carroussel/Banner2.png" alt="Image 2">
            <div class="carousel-controls">
                <button id="prev">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="30" cy="30" r="30" fill="#161616"/>
                    <path d="M37.6771 31.4444L27.4002 41.7212L25.3264 39.6474L34.2836 30.6903L34.5664 30.4074L34.2836 30.1246L25.3264 21.1674L27.4002 19.0936L37.6771 29.3705C37.6771 29.3705 37.6771 29.3705 37.6771 29.3705C37.952 29.6456 38.1065 30.0185 38.1065 30.4074C38.1065 30.7963 37.952 31.1693 37.6771 31.4443C37.6771 31.4443 37.6771 31.4443 37.6771 31.4444Z" fill="#1A9F1A" stroke="#1A9F1A" stroke-width="0.8"/>
                    </svg>
                </button>
                <button id="next">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="30" cy="30" r="30" fill="#161616"/>
                    <path d="M37.6771 31.4444L27.4002 41.7212L25.3264 39.6474L34.2836 30.6903L34.5664 30.4074L34.2836 30.1246L25.3264 21.1674L27.4002 19.0936L37.6771 29.3705C37.6771 29.3705 37.6771 29.3705 37.6771 29.3705C37.952 29.6456 38.1065 30.0185 38.1065 30.4074C38.1065 30.7963 37.952 31.1693 37.6771 31.4443C37.6771 31.4443 37.6771 31.4443 37.6771 31.4444Z" fill="#1A9F1A" stroke="#1A9F1A" stroke-width="0.8"/>
                    </svg>
                </button>
            </div>
            <div class="progress-bar-container" id="progress-bar-container">
                <div class="progress-bar active"></div>
                <div class="progress-bar"></div>
            </div>
        </div>
        `;

        this.images = this.querySelectorAll('.carousel img');
        this.progressBars = this.querySelectorAll('.progress-bar');
        this.currentIndex = 0;
        this.intervalTime = 3000;
        this.autoSlide = setInterval(() => this.showNextImage(), this.intervalTime);

        this.querySelector('#next').addEventListener('click', () => {
            clearInterval(this.autoSlide);
            this.showNextImage();
            this.autoSlide = setInterval(() => this.showNextImage(), this.intervalTime);
        });

        this.querySelector('#prev').addEventListener('click', () => {
            clearInterval(this.autoSlide);
            this.showPrevImage();
            this.autoSlide = setInterval(() => this.showNextImage(), this.intervalTime);
        });
    }

    showNextImage() {
        this.images[this.currentIndex].classList.remove('active');
        this.progressBars[this.currentIndex].classList.remove('active');
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.images[this.currentIndex].classList.add('active');
        this.progressBars[this.currentIndex].classList.add('active');
    }

    showPrevImage() {
        this.images[this.currentIndex].classList.remove('active');
        this.progressBars[this.currentIndex].classList.remove('active');
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        this.images[this.currentIndex].classList.add('active');
        this.progressBars[this.currentIndex].classList.add('active');
    }
}

customElements.define('carousel-element', Carroussel);
