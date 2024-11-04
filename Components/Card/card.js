class Card extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <style>
            /* Card Style */
            .card {
                margin: 20px;
                width: 225px;
                height: 350px;
                border-radius: 10px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                overflow: hidden;
                position: relative;
                transition: transform 0.3s;
                background-image: url('https://s2-ge.glbimg.com/hgj24eLzTOm5WcMh2gsJWPYibEU=/0x7:770x979/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2020/q/f/4xh4idQlWaQeyAhyDitQ/halo-infinite-capa-xbox-series-x.png');
                background-size: cover;
                background-position: center;
            }

            .card:hover {
                transform: scale(1.05);
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
            }

            .badge img {
                width: 65px;
                height: 29px;
                margin-right: 5px;
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
            }

            .product-image {
                width: 100%;
                height: 300px;
                object-fit: cover;
            }

            .card-content {
                position: absolute;
                bottom: 0;
                width: 100%;
                height: 120px;
                background-color: #107C10;
                color: white;
                padding: 10px;
                padding-bottom: 20px;
                border-radius: 10px 10px 0 0;
                box-shadow: inset 0 4px 8px rgba(0, 0, 0, 0.2);
            }

            .product-name {
                text-align: center;
                font-size: 18px;
                font-weight: bold;
                margin-bottom: 20px;
            }

            .product-price {
                font-size: 10px;
            }

            .product-price2 {
                font-size: 18px;
                font-weight: bold;
                margin-top: -10px;
            }

            .card-buttons {
                justify-content: flex-end;
                display: flex;
                margin-top: -50px;
            }

            .global-btn,
            .more-info-btn {
                background-color: #1e1e1e;
                color: white;
                border: none;
                padding: 5px 10px;
                font-size: 12px;
                border-radius: 10px;
                cursor: pointer;
            }

            .share-btn {
                background-color: #1e1e1e;
                border: none;
                height: 30px;
                width: 30px;
                align-items: center;
                text-align: center;
                font-size: 12px;
                border-radius: 10px;
                cursor: pointer;
                margin-left: 10px;
            }

            .share-btn img{
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

            <div class="card" onclick="openModal()">
                <div class="badge">
                    <img src="../../images/image 7.svg" alt="">
                </div>
                <div class="badge2">
                    <button class="global-btn">Global</button>
                </div>
                <div class="card-content">
                    <h3 class="product-name">Nome do Produto</h3>
                    <p class="product-price">A partir de </p>
                    <p class="product-price2">R$ 00,00</p>
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
                    <span class="close" onclick="closeModal()">&times;</span>
                    <div>
                        <img src="https://s2-ge.glbimg.com/hgj24eLzTOm5WcMh2gsJWPYibEU=/0x7:770x979/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2020/q/f/4xh4idQlWaQeyAhyDitQ/halo-infinite-capa-xbox-series-x.png" alt="">
                    </div>
                    <div>
                        <h2>Nome do Produto</h2>
                        </br>
                        <p>Descrição detalhada do produto ou jogo. Informações sobre a história, jogabilidade, preço e outras
                            características importantes.</p>
                        <p>Plataforma: Xbox Series X|S</p>
                        <p>Preço: R$ 00,00</p>
                    </div>
                </div>
            </div>
        `

        this.openModal();
        this.closeModal();
    }

    openModal() {
        this.querySelector('.card').addEventListener('click', () => {
            this.querySelector('#product-modal').style.display = 'flex';
        });
    }

    closeModal() {
        window.onclick = (event) => {
            const modal = this.querySelector('#product-modal');
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        };
    }

    disconnectedCallback() {
        console.log('Card desconectado');
    }
}

customElements.define('card-component', Card);