class Mostseller extends HTMLElement {
    connectedCallback() {

        const image = this.getAttribute('image');
        const name = this.getAttribute('name');
        const subtitle = this.getAttribute('subtitle') || '';
        const price = this.getAttribute('price');
        const previousPrice = this.getAttribute('previous-price');
        const genre1 = this.getAttribute('genre1');
        const genre2 = this.getAttribute('genre2');
        const genre3 = this.getAttribute('genre3');
        const rating = this.getAttribute('rating');
        const badge = this.getAttribute('badge');
        const badgeRegion = this.getAttribute('badge-region');

        this.innerHTML = `
        <style>
            .box-container {
                display: flex;
                width: 900px;
                max-width: 900px;
                gap: 20px;
                margin: 20px;
                background-color: rgba(0, 0, 0, 0.7);
                border-radius: 10px;
                overflow: hidden;
            }

            .game-img {
                width: 200px;
                height: 100%;
                object-fit: cover;
                border-radius: 10px 0 0 10px;
                transition: 0.3s ease-in-out;
            }

            .game-img:hover {
                cursor: pointer;
                width: 220px;
            }

            .content {
                display: flex;
                justify-content: space-between;
                padding: 20px;
                color: var(--white);
                width: 100%;
            }

            .info {
                flex: 1;
            }

            .info h2 {
                font-size: 24px;
                font-weight: bold;
                margin: 0;
            }

            .game-genres, .game-rating {
                font-size: 14px;
                margin: 5px 0;
            }

            .price-previous {
                font-size: 14px;
                color: #bbb;
                text-decoration: line-through;
                color: #ff4d4d;
                margin: 5px 0;
                margin-top: 20px;
            }

            .price-current {
                font-size: 24px;
                font-weight: bold;
                margin: 0;
            }

            .region-info {
                margin-top: 52px;
                font-size: 10px;
            }

            .buttons {
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                gap: 10px;
            }

            .badges {
                display: flex;
                gap: 10px;
                margin-bottom: 25px;
            }

            .badgeConsole {
                width: 70px;
                align-items: center;
                background-color: var(--darkGreen);
                padding: 5px 10px;
                border-radius: 5px;
                font-size: 12px;
                box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
            }

            .badgeConsole:nth-child(1) {
                background-color: var(--gray);
            }

            .global-btn1 {
                background: none;
                color: var(--white);
                border: none;
                padding: 5px;
                font-size: 12px;
            }

            .badgeConsole img {
                width: 50px;
            }

            .wishlist-button, .cart-button {
                background-color: var(--darkGreen);
                width: 100px;
                height: 40px;
                border-radius: 5px;
                border: none;
                cursor: pointer;
                transition: 0.3s ease-in-out;
            }

            .wishlist-button:hover, .cart-button:hover {
                border: 1px solid var(--darkGreen);
                width: 150px;
                background: rgba(0, 0, 0, 0.2);
            }

            .wishlist-button:hover svg path, .cart-button:hover svg path{
                fill: var(--darkGreen);
            }

            .wishlist-button svg, .cart-button svg {
                width: 30px;
                height: 30px;
            }

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
                width: 700px;
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
        </style>
            <div class="box-container">
                <img src="${image}" alt="" class="game-img" id="open-modal-btn">
                <div class="content">
                    <div class="info">
                        <h2>${name}</h2>
                        <div class="game-genres">
                            <span>${genre1}</span>, <span>${genre2}</span>, <span>${genre3}</span>
                        </div>
                        <div class="game-rating">${rating}</div>
                        ${previousPrice ? `<p class="price-previous">${previousPrice}</p>` : ''}
                        <h3 class="price-current">${price}</h3>
                        <p class="region-info">Verificar região da chave*</p>
                    </div>
                    <div class="buttons">
                        <div class="badges">
                            <div class="badgeConsole">
                                <button class="global-btn1">${badgeRegion}</button>
                            </div>
                            <div class="badgeConsole">
                                <img src="${badge}" alt="">
                            </div>
                        </div>
                        <button class="wishlist-button">
                            <?xml version="1.0" encoding="utf-8"?>
                                <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.46785 10.2658C4.47574 10.3372 4.48376 10.4094 4.49187 10.4823L4.61751 11.6131C4.7057 12.4072 4.78218 13.0959 4.91562 13.6455C5.05917 14.2367 5.29582 14.7937 5.78931 15.2354C6.28281 15.6771 6.86251 15.8508 7.46598 15.9281C8.02694 16.0001 8.71985 16 9.51887 16H14.8723C15.4201 16 15.9036 16 16.3073 15.959C16.7448 15.9146 17.1698 15.8162 17.5785 15.5701C17.9872 15.324 18.2731 14.9944 18.5171 14.6286C18.7422 14.291 18.9684 13.8637 19.2246 13.3797L21.7141 8.67734C22.5974 7.00887 21.3879 4.99998 19.5 4.99998L9.39884 4.99998C8.41604 4.99993 7.57525 4.99988 6.90973 5.09287C6.5729 5.13994 6.24284 5.21529 5.93326 5.34375L5.78941 4.04912C5.65979 2.88255 4.67375 2 3.5 2H3C2.44772 2 2 2.44771 2 3C2 3.55228 2.44772 4 3 4H3.5C3.65465 4 3.78456 4.11628 3.80164 4.26998L4.46785 10.2658Z" fill="black"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14 19.5C14 18.1193 15.1193 17 16.5 17C17.8807 17 19 18.1193 19 19.5C19 20.8807 17.8807 22 16.5 22C15.1193 22 14 20.8807 14 19.5Z" fill="black"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5 19.5C5 18.1193 6.11929 17 7.5 17C8.88071 17 10 18.1193 10 19.5C10 20.8807 8.88071 22 7.5 22C6.11929 22 5 20.8807 5 19.5Z" fill="black"/>
                            </svg>
                        </button>
                        <button class="cart-button">
                            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.4998 31.1354L15.3853 29.2104C7.87484 22.4 2.9165 17.8938 2.9165 12.3958C2.9165 7.88958 6.44567 4.375 10.9373 4.375C13.4748 4.375 15.9103 5.55625 17.4998 7.40833C19.0894 5.55625 21.5248 4.375 24.0623 4.375C28.554 4.375 32.0832 7.88958 32.0832 12.3958C32.0832 17.8938 27.1248 22.4 19.6144 29.2104L17.4998 31.1354Z" fill="black"/>
                            </svg>                        
                        </button>
                    </div>
                </div>
            </div>
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
            </div>`

        this.querySelector('.game-img').addEventListener('click', () => {
            this.querySelector('#product-modal').style.display = 'flex';
        });

        this.querySelector('.close').addEventListener('click', () => {
            this.querySelector('#product-modal').style.display = 'none';
        });
    }
}

customElements.define('most-seller', Mostseller);