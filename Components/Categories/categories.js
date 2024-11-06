class Categories extends HTMLElement {
    connectedCallback() {

        const image = this.getAttribute('image');
        const name = this.getAttribute('name');
        const link = this.getAttribute('link');

        this.innerHTML = `
        <style>
            .categories {
                align-items: center;
                text-align: center;
                margin: 10px;
                }
                
            .categories a img {
                width: 90px;
                height: 90px;
                border-radius: 50%;
                object-fit: cover;
                transition: transform 0.2s ease-in-out;
            }
            
            .categories a img:hover {
                transform: scale(1.1);
            }

            .categories h3 {
                margin: 10px;
            }
        </style>
        <div class="categories">
            <a href="${link}">
                <img src="${image}" alt="">
            </a>
            <h3>${name}</h3>
        </div>
        `;
    }
}

customElements.define('categories-component', Categories);