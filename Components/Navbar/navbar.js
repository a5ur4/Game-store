class Navbar extends HTMLElement {
    connectedCallback() {
        const logo = this.getAttribute('logo') || 'https://cdn-icons-png.flaticon.com/512/25/25231.png';
        const title = this.getAttribute('title') || 'Navbar';
        const link1 = this.getAttribute('nav-link') 
        const link2 = this.getAttribute('link2')
        const link3 = this.getAttribute('link3')
        const link4 = this.getAttribute('link4')
        const link5 = this.getAttribute('link5')

        this.innerHTML = `
        <style>
            .navbar {
                width: 250px;
                height: 100%;
                background-color: #161616;
                color: white;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding-top: 20px;
                position: fixed; 
                top: 0;
                left: 0;
                transition: width 0.3s;
                z-index: 2;
                border-right: 3px solid #1A9F1A;
                border-radius: 0 20px 20px 0;
            }

            .navbar.collapsed {
                width: 80px; 
                background: rgba(0,0,0,0.5);
            }

            .logo {
                display: flex;
                align-items: center;
                margin-bottom: 20px;
            }

            .logo img {
                width: 45px;
                height: 45px;
            }

            .navbar-title {
                font-size: 16px;
                margin-left: 10px;
                font-weight: 700;
            }

            .navbar.collapsed .navbar-title {
                display: none;
            }

            .nav-links {
                width: 100%;
                padding: 0;
            }

            .nav-link {
                width: 100%;
                display: flex;
                align-items: center;
                padding: 15px 20px;
                color: #d4d4d4;
                text-decoration: none;
                transition: 0.2s ease-in-out;
                margin-left: 30px;
                border-radius: 5px;
            }

            .nav-link:hover {
                background-color: #333;
                width: 75%;
            }

            .nav-link .icon {
                width: 20px;
                height: 20px;
            }

            .nav-link span {
                margin-left: 15px;
            }

            .navbar.collapsed .nav-link {
                margin-left: -1px;
            }

            .navbar.collapsed .nav-link span {
                display: none;
            }

            .navbar.collapsed .nav-link .icon {
                margin: 0 auto;
            }

            .navbar.collapsed .nav-link:hover {
                width: 150%;
            }

            .collapse-btn {
                background: none;
                border: none;
                color: #d4d4d4;
                font-size: 20px;
                margin: 20px 0;
                margin-top: 80px;
                cursor: pointer;
                transition: 0.3s ease-in-out;
            }

            .navbar.collapsed .collapse-btn {
                transform: rotate(180deg)
                    scale(0.8);
            }

            .footer_navbar {
                margin-top: auto;
                text-align: center;
                padding-bottom: 20px;
            }

            .toggle-mode {
                background: none;
                border: none;
                color: #d4d4d4;
                display: flex;
                align-items: center;
                font-size: 14px;
                cursor: pointer;
            }

            .navbar.collapsed .toggle-mode {
                display: none;
            }

            .auth-buttons {
                display: flex;
                gap: 10px;
                margin-top: 10px;
            }

            .login,
            .register {
                background: none;
                border: 1px solid #d4d4d4;
                color: #d4d4d4;
                padding: 5px 10px;
                font-size: 14px;
                cursor: pointer;
                border-radius: 5px;
            }

            .register {
                border-color: #00ff00;
                color: #00ff00;
            }

            .navbar.collapsed .toggle-mode span,
            .navbar.collapsed .auth-buttons {
                display: none;
            }
        </style>

        <div class="navbar">
            <div class="logo">
                <?xml version="1.0" encoding="utf-8"?>
                <img src="${logo}" alt="Logo" class="icon" />
                <span class="navbar-title">${title}</span>
            </div>
            <nav class="nav-links">
                <a href="../Pages/home.html" class="nav-link" id="link1">
                    <?xml version="1.0" encoding="utf-8"?>
                    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon icon-catalog">
                        <path d="M1 6V15H6V11C6 9.89543 6.89543 9 8 9C9.10457 9 10 9.89543 10 11V15H15V6L8 0L1 6Z" fill="#B8ADB7"/>
                    </svg> 
                <span>Início</span>
                </a>
                <a href="${link2}" class="nav-link" id="link2">
                    <?xml version="1.0" encoding="utf-8"?>
                    <svg width="800px" height="800px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#B8ADB7" class="icon icon-catalog">
                        <path d="M10 2a2 2 0 0 1-1.5 1.937v5.087c.863.083 1.5.377 1.5.726 0 .414-.895.75-2 .75s-2-.336-2-.75c0-.35.637-.643 1.5-.726V3.937A2 2 0 1 1 10 2z"/>
                        <path d="M0 9.665v1.717a1 1 0 0 0 .553.894l6.553 3.277a2 2 0 0 0 1.788 0l6.553-3.277a1 1 0 0 0 .553-.894V9.665c0-.1-.06-.19-.152-.23L9.5 6.715v.993l5.227 2.178a.125.125 0 0 1 .001.23l-5.94 2.546a2 2 0 0 1-1.576 0l-5.94-2.546a.125.125 0 0 1 .001-.23L6.5 7.708l-.013-.988L.152 9.435a.25.25 0 0 0-.152.23z"/>
                    </svg>
                    <span>Catálogo</span>
                </a>
                <a href="${link3}" class="nav-link" id="link3">
                    <svg viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon icon-catalog">
                        <path d="M7.875 3.5C7.64294 3.5 7.42038 3.59219 7.25628 3.75628C7.09219 3.92038 7 4.14294 7 4.375V30.625C7 30.8571 7.09219 31.0796 7.25628 31.2437C7.42038 31.4078 7.64294 31.5 7.875 31.5H12.25V16.625C12.25 16.3929 12.3422 16.1704 12.5063 16.0063C12.6704 15.8422 12.8929 15.75 13.125 15.75C13.3571 15.75 13.5796 15.8422 13.7437 16.0063C13.9078 16.1704 14 16.3929 14 16.625V31.5H27.125C27.3571 31.5 27.5796 31.4078 27.7437 31.2437C27.9078 31.0796 28 30.8571 28 30.625V4.375C28 4.14294 27.9078 3.92038 27.7437 3.75628C27.5796 3.59219 27.3571 3.5 27.125 3.5H7.875ZM13.125 11.375C12.7769 11.375 12.4431 11.2367 12.1969 10.9906C11.9508 10.7444 11.8125 10.4106 11.8125 10.0625C11.8125 9.7144 11.9508 9.38056 12.1969 9.13442C12.4431 8.88828 12.7769 8.75 13.125 8.75C13.4731 8.75 13.8069 8.88828 14.0531 9.13442C14.2992 9.38056 14.4375 9.7144 14.4375 10.0625C14.4375 10.4106 14.2992 10.7444 14.0531 10.9906C13.8069 11.2367 13.4731 11.375 13.125 11.375Z" fill="#B8ADB7"/>
                    </svg>                     
                    <span>Exclusivos</span>
                </a>
                <a href="${link4}" class="nav-link" id="link4">
                    <svg viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon icon-catalog">
                        <path d="M27.198 4.15635L28.0876 9.78551L33.2064 12.3959L30.6251 17.5001L33.221 22.6043L28.0585 25.2147L27.1689 30.8438L21.496 29.9543L17.4564 33.9793L13.4022 29.8959L7.77305 30.8293L6.86888 25.1563L1.7793 22.5605L4.37513 17.4563L1.79388 12.3959L6.91263 9.75635L7.80221 4.17093L13.446 5.10426L17.5001 1.00635L21.5397 5.04593L27.198 4.15635ZM13.8543 10.2084C13.2741 10.2084 12.7177 10.4389 12.3075 10.8491C11.8973 11.2594 11.6668 11.8158 11.6668 12.3959C11.6668 12.9761 11.8973 13.5325 12.3075 13.9427C12.7177 14.353 13.2741 14.5834 13.8543 14.5834C14.4345 14.5834 14.9909 14.353 15.4011 13.9427C15.8113 13.5325 16.0418 12.9761 16.0418 12.3959C16.0418 11.8158 15.8113 11.2594 15.4011 10.8491C14.9909 10.4389 14.4345 10.2084 13.8543 10.2084ZM21.146 20.4168C20.5658 20.4168 20.0094 20.6472 19.5992 21.0575C19.1889 21.4677 18.9585 22.0241 18.9585 22.6043C18.9585 23.1844 19.1889 23.7408 19.5992 24.1511C20.0094 24.5613 20.5658 24.7918 21.146 24.7918C21.7261 24.7918 22.2825 24.5613 22.6928 24.1511C23.103 23.7408 23.3335 23.1844 23.3335 22.6043C23.3335 22.0241 23.103 21.4677 22.6928 21.0575C22.2825 20.6472 21.7261 20.4168 21.146 20.4168ZM12.2647 24.7918L24.7918 12.2647L22.7355 10.2084L10.2085 22.7355L12.2647 24.7918Z" fill="#B8ADB7"/>
                    </svg> 
                    <span>Ofertas</span>
                </a>
                <a href="../Pages/categories.html" class="nav-link" id="link5">
                    <svg viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon icon-catalog">
                        <path d="M9.47917 16.0416L17.5 2.91663L25.5208 16.0416H9.47917ZM25.5208 32.0833C23.6979 32.0833 22.1487 31.4455 20.8731 30.17C19.5976 28.8944 18.9593 27.3447 18.9583 25.5208C18.9574 23.6969 19.5956 22.1477 20.8731 20.8731C22.1506 19.5985 23.6999 18.9602 25.5208 18.9583C27.3418 18.9563 28.8915 19.5946 30.17 20.8731C31.4485 22.1516 32.0862 23.7008 32.0833 25.5208C32.0804 27.3408 31.4426 28.8905 30.17 30.17C28.8974 31.4494 27.3476 32.0872 25.5208 32.0833ZM4.375 31.3541V19.6875H16.0417V31.3541H4.375Z" fill="#B8ADB7"/>
                    </svg>                 
                    <span>Categorias</span>
                </a>
            </nav>

            <button class="collapse-btn">
                <svg width="60" height="60" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="40" cy="40" r="38.5" fill="#161616" stroke="#61656B" stroke-width="3"/>
                    <path d="M30.6539 38.6945L43.5 25.8484L46.0922 28.4406L34.8958 39.6371L34.5422 39.9906L34.8958 40.3442L46.0922 51.5406L43.5 54.1329L30.6539 41.2868C30.6539 41.2868 30.6539 41.2868 30.6539 41.2867C30.3102 40.943 30.1171 40.4767 30.1171 39.9906C30.1171 39.5045 30.3102 39.0383 30.6539 38.6945C30.6539 38.6945 30.6539 38.6945 30.6539 38.6945Z" fill="#61656B" stroke="#61656B"/>
                </svg>
            </button>

            <div class="footer">
                <button class="toggle-mode">
                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M33.75 22.5C33.75 25.4837 32.5647 28.3452 30.455 30.455C28.3452 32.5647 25.4837 33.75 22.5 33.75C19.5163 33.75 16.6548 32.5647 14.545 30.455C12.4353 28.3452 11.25 25.4837 11.25 22.5C11.25 19.5163 12.4353 16.6548 14.545 14.545C16.6548 12.4353 19.5163 11.25 22.5 11.25C25.4837 11.25 28.3452 12.4353 30.455 14.545C32.5647 16.6548 33.75 19.5163 33.75 22.5Z" fill="#1A9F1A"/>
                        </svg>                     
                    <span>Modo Claro</span>
                </button>
                <div class="auth-buttons">
                    <button class="login">Entrar</button>
                    <button class="register">Registrar</button>
                </div>
            </div>
        </div>
        `

        this.collapseNavbar();
        this.toggleMode();
    }

    collapseNavbar() {
        const collapseBtn = this.querySelector(".collapse-btn");
        const navbar = this.querySelector(".navbar");

        collapseBtn.addEventListener("click", () => {
            navbar.classList.toggle("collapsed");
        });
    }

    toggleMode() {
        const toggleModeBtn = this.querySelector(".toggle-mode");

        toggleModeBtn.addEventListener("click", () => {
            const modeText = toggleModeBtn.querySelector("span");
            modeText.textContent =
            modeText.textContent === "Modo Claro" ? "Modo Escuro" : "Modo Claro";
        });
    }

    disconnectedCallback() {
        console.log('Navbar desconectado');
    }
}

customElements.define('nav-bar', Navbar);