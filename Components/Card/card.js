class Card extends HTMLElement {
    connectedCallback() {
        const image = this.getAttribute('image');
        const badge = this.getAttribute('badge');
        const name = this.getAttribute('name');
        const subtitle = this.getAttribute('subtitle') || '';
        const price = this.getAttribute('price');

        this.innerHTML = `
        <style>
            .card {
                margin: 20px;
                width: 225px;
                height: 350px;
                border-radius: 10px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                overflow: hidden;
                position: relative;
                transition: transform 0.3s;
            }

            .card:hover {
                transform: scale(1.05);
            }

            .card img.background-image {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
                z-index: 0;
            }

            .badge {
                position: absolute;
                top: 10px;
                left: 10px;
                background-color: #107C10;
                padding: 5px 10px;
                border-radius: 5px;
                font-size: 12px;
                box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
                z-index: 1;
            }

            .badge img {
                width: 50px;
            }

            .badge2 {
                position: absolute;
                top: 10px;
                right: 10px;
                background-color: #1e1e1e;
                color: #00ff00;
                padding: 5px 10px;
                border-radius: 5px;
                font-size: 12px;
                box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
                z-index: 1;
            }

            .card-content {
                position: absolute;
                bottom: 0;
                width: 100%;
                height: 120px;
                background-color: #107C10;
                color: white;
                padding: 10px;
                border-radius: 10px 10px 0 0;
                box-shadow: inset 0 4px 8px rgba(0, 0, 0, 0.2);
                z-index: 1;
            }

            .product-name {
                text-align: center;
                font-size: 18px;
                font-weight: bold;
            }

            .product-subtitle {
                text-align: center;
                font-size: 10px;
                margin-bottom: 20px;
                font-weight: 600;
            }

            .product-price {
                font-size: 10px;
            }

            .product-price2 {
                font-size: 18px;
                font-weight: bold;
            }

            .card-buttons {
                justify-content: flex-end;
                display: flex;
                margin-top: -30px;
            }

            .global-btn,
            .more-info-btn,
            .share-btn {
                background-color: #1e1e1e;
                color: white;
                border: none;
                padding: 5px 10px;
                font-size: 12px;
                border-radius: 10px;
                cursor: pointer;
                z-index: 1;
            }

            .share-btn img {
                height: 15px;
                width: 15px;
            }
            
            /* Modal Style */
            .modal {
                display: none;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.7);
                justify-content: center;
                align-items: center;
                z-index: 1000;
            }

            .modal-content {
                background-color: #ffffff;
                padding: 20px;
                width: 600px;
                border-radius: 10px;
                display: flex;
                flex-direction: row;
                gap: 20px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                position: relative;
            }

            .modal-content img {
                width: 200px;
                height: 300px;
                object-fit: cover;
                border-radius: 10px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            }

            .modal-content h2 {
                font-size: 24px;
                color: #107C10;
            }

            .modal-content h3 {
                font-size: 18px;
                margin-bottom: 10px;
                color: #107C10;
            }

            .modal-content p {
                font-size: 16px;
                color: #333;
                line-height: 1.5;
            }

            .close {
                position: absolute;
                top: 10px;
                right: 20px;
                font-size: 24px;
                cursor: pointer;
                color: #555;
                transition: color 0.3s;
            }

            .close:hover {
                color: #ff0000;
            }

            /* Button styling for dark mode toggle */
            .dark-mode-toggle {
                position: fixed;
                top: 20px;
                right: 20px;
                background-color: #1e1e1e;
                color: #ffffff;
                padding: 10px 15px;
                border-radius: 5px;
                font-size: 16px;
                cursor: pointer;
            }

            /* Dark mode styles */
            body.dark-mode {
                background-color: #1e1e1e;
                color: #f5f5f5;
            }

            body.dark-mode .modal-content {
                background-color: #333;
                color: #f5f5f5;
            }

            body.dark-mode .close {
                color: #f5f5f5;
            }

            body.dark-mode .close:hover {
                color: #ff4040;
            }
        </style>
            <div class="card">
                <img src="${image}" class="background-image" alt="Background Image">
                <div class="badge">
                    <img src="${badge}" alt="">
                </div>
                <div class="badge2">
                    <button class="global-btn">Global</button>
                </div>
                <div class="card-content">
                    <h3 class="product-name">${name}</h3>
                    <h5 class="product-subtitle">${subtitle}</h5>
                    <p class="product-price">A partir de </p>
                    <p class="product-price2">${price}</p>
                    <div class="card-buttons">
                        <button class="share-btn">
                            <img src="../../images/share-nodes-svgrepo-com.svg" alt="">
                        </button>
                        <button class="share-btn">
                            <img src="../../images/shopping-cart-svgrepo-com.svg" alt="">
                        </button>
                    </div>
                </div>
            </div>

            <!-- Modal -->
            <div id="product-modal" class="modal">
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <div>
                        <img src="${image}" alt="">
                    </div>
                    <div>
                        <h2>${name}</h2>
                        <h3>${subtitle}</h3>
                        <br>
                        <p>Descrição detalhada do produto ou jogo. Informações sobre a história, jogabilidade, preço e outras
                            características importantes.</p>
                        <p>Plataforma: Xbox Series X|S</p>
                        <p>Preço: ${price}</p>
                    </div>
                </div>
            </div>
        `;

        this.querySelector('.card').addEventListener('click', () => {
            this.querySelector('#product-modal').style.display = 'flex';
        });

        this.querySelector('.close').addEventListener('click', () => {
            this.querySelector('#product-modal').style.display = 'none';
        });
    }

    disconnectedCallback() {
        console.log('Card desconectado');
    }
}

customElements.define('card-component', Card);
