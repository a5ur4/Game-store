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
                z-index: 1;
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
                <a href="${link1}" class="nav-link" id="link1">
                    <?xml version="1.0" encoding="utf-8"?>
                    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon icon-catalog">
                        <path d="M1 6V15H6V11C6 9.89543 6.89543 9 8 9C9.10457 9 10 9.89543 10 11V15H15V6L8 0L1 6Z" fill="#107C10"/>
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
                <a href="${link5}" class="nav-link" id="link5">
                    <svg viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon icon-catalog">
                        <path d="M14.5832 7.29163C14.5832 7.86616 14.47 8.43507 14.2501 8.96587C14.0303 9.49667 13.708 9.97896 13.3018 10.3852C12.8955 10.7915 12.4132 11.1137 11.8824 11.3336C11.3516 11.5535 10.7827 11.6666 10.2082 11.6666C9.63364 11.6666 9.06473 11.5535 8.53393 11.3336C8.00313 11.1137 7.52083 10.7915 7.11458 10.3852C6.70832 9.97896 6.38606 9.49667 6.1662 8.96587C5.94633 8.43507 5.83317 7.86616 5.83317 7.29163C5.83317 6.1313 6.29411 5.01851 7.11458 4.19803C7.93505 3.37756 9.04785 2.91663 10.2082 2.91663C11.3685 2.91663 12.4813 3.37756 13.3018 4.19803C14.1222 5.01851 14.5832 6.1313 14.5832 7.29163ZM17.4998 20.4166C18.0744 20.4166 18.6433 20.3035 19.1741 20.0836C19.7049 19.8637 20.1872 19.5415 20.5934 19.1352C20.9997 18.729 21.3219 18.2467 21.5418 17.7159C21.7617 17.1851 21.8748 16.6162 21.8748 16.0416C21.8748 15.4671 21.7617 14.8982 21.5418 14.3674C21.3219 13.8366 20.9997 13.3543 20.5934 12.948C20.1872 12.5418 19.7049 12.2195 19.1741 11.9997C18.6433 11.7798 18.0744 11.6666 17.4998 11.6666C16.3395 11.6666 15.2267 12.1276 14.4062 12.948C13.5858 13.7685 13.1248 14.8813 13.1248 16.0416C13.1248 17.2019 13.5858 18.3147 14.4062 19.1352C15.2267 19.9557 16.3395 20.4166 17.4998 20.4166ZM10.354 14.5833H5.83317C5.05962 14.5833 4.31776 14.8906 3.77078 15.4376C3.22379 15.9845 2.9165 16.7264 2.9165 17.5V18.1037C2.9165 19.842 3.91692 21.2712 5.24109 22.2075C6.03442 22.7704 6.98234 23.1875 8.01775 23.4325C8.80234 22.0091 10.1644 20.9533 11.7861 20.5712C11.1234 19.7389 10.6516 18.7712 10.4041 17.7365C10.1567 16.7018 10.1395 15.6253 10.354 14.5833ZM23.2165 20.5712C24.0089 20.7585 24.7532 21.1096 25.4017 21.6018C26.0502 22.0941 26.5885 22.7167 26.9819 23.4295C28.0173 23.1875 28.9653 22.7704 29.7586 22.2075C31.0828 21.2741 32.0832 19.842 32.0832 18.1037V17.5C32.0832 16.7264 31.7759 15.9845 31.2289 15.4376C30.6819 14.8906 29.9401 14.5833 29.1665 14.5833H24.6457C24.8565 15.6253 24.8379 16.7007 24.5911 17.7348C24.3443 18.7688 23.8752 19.7368 23.2165 20.5712ZM13.1248 23.3333C12.3513 23.3333 11.6094 23.6406 11.0624 24.1876C10.5155 24.7345 10.2082 25.4764 10.2082 26.25V26.737C10.2082 28.4491 11.2494 29.8229 12.5648 30.6979C13.8919 31.5875 15.6419 32.0833 17.4998 32.0833C19.3578 32.0833 21.1078 31.5845 22.4348 30.6979C23.7473 29.8229 24.7915 28.4491 24.7915 26.737V26.25C24.7915 25.4764 24.4842 24.7345 23.9372 24.1876C23.3902 23.6406 22.6484 23.3333 21.8748 23.3333H13.1248ZM26.2498 11.6666C27.4102 11.6666 28.523 11.2057 29.3434 10.3852C30.1639 9.56475 30.6248 8.45195 30.6248 7.29163C30.6248 6.1313 30.1639 5.01851 29.3434 4.19803C28.523 3.37756 27.4102 2.91663 26.2498 2.91663C25.0895 2.91663 23.9767 3.37756 23.1562 4.19803C22.3358 5.01851 21.8748 6.1313 21.8748 7.29163C21.8748 8.45195 22.3358 9.56475 23.1562 10.3852C23.9767 11.2057 25.0895 11.6666 26.2498 11.6666Z" fill="#B8ADB7"/>
                    </svg>                     
                    <span>Comunidade</span>
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