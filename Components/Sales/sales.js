class Sales extends HTMLElement {
    connectedCallback() {

        const text1 = this.getAttribute('text1');
        const text2 = this.getAttribute('text2');
        const text3 = this.getAttribute('text3');
        const text4 = this.getAttribute('text4');
        const image  = this.getAttribute('image');

        this.innerHTML = `
            <style>
            .box {
                width: 380px;
                height: 260px;
                border: 1px solid #1A9F1A;
                background-color: #161616;
                margin: 10px;
                border-radius: 10px;
                cursor: pointer;
                transition: 0.3s ease-in-out;
            }

            .box:hover {
                transform: scale(1.02);
                box-shadow: 0 0 10px #1A9F1A;
            }

            h4 {
                color: white;
                font-size: 8px;
                font-weight: 300;
                text-align: center;
            }

            .box-header {
                background-color: #1A9F1A;
                width: 100%;
                height: 90px;
                padding: 1px;
                padding-left: 30px;
                padding-top: 15px;
                border-top-left-radius: 10px;
                border-top-right-radius: 10px;
            }

            .box-header p {
                color: #161616;
                font-size: 12px;
                font-weight: bold;
                margin-top: 10px;
            }

            .box-header h3 {
                color: white;
                font-size: 22px;
            }

            .box-container {
                display: flex;
                justify-content: space-between;
                padding: 20px;
            }

            .box-left p:nth-child(1) {
                color: white;
                font-size: 12px;
                font-weight: bold;
                margin-top: 10px;
                margin-bottom: -5px;
            }

            .box-left h2 {
                color: white;
                font-size: 45px;
                font-weight: bold;
            }

            .box-left p:nth-child(3) {
                color: white;
                font-size: 7px;
                margin-top: -5px;
            }

            .box-container img {
                margin-top: -75px;
                transform: scale(0.55);
            }
            </style>
            <div class="box">
                <div class="box-header">
                    <p id="text1">${text1}</p>
                    <h3>Compre agora</h3>
                </div>
                <div class="box-container">
                    <div class="box-left">
                        <p id="text2">${text2}</p>
                        <h2 id="text3">${text3}</h2>
                        <p id="text4">${text4}</p>
                    </div>

                    <img src="${image}" alt="Imagem do produto">
                </div>
            </div>
            <h4>Sujeito a acrescimo de taxas alfandegarias e envio*</h4>
        `;
    }
}

customElements.define('sales-component', Sales);