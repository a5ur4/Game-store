class Navbar extends HTMLElement {
    connectedCallback() {
        const logo = this.getAttribute('logo') || 'https://cdn-icons-png.flaticon.com/512/25/25231.png';
        const title = this.getAttribute('title') || 'Navbar';
        const links = JSON.parse(this.getAttribute('links') || '[]')

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
                font-family: var(--Montserrat), sans-serif;
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
                color: var(--text-color);
                display: flex;
                align-items: center;
                font-size: 14px;
                cursor: pointer;
            }

            .toggle-mode .mode-icon {
                width: 40px; /* Tamanho da imagem */
                height: 40px;
                margin-right: 8px; /* Espaçamento entre a imagem e o texto */
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

            @media (max-width: 768px) {
            .navbar {
                width: 100%;
                height: auto;
                position: fixed;
                flex-direction: row;
                justify-content: space-between;
                padding: 10px;
                padding-top: 20px;
                border-radius: 0;
                border: none;
                background-color: rgba(0,0,0,0.9);
            }

            .navbar-title {
                display: none;
            }

            .navbar.collapsed {
                height: auto;
                width: 100%;
                background-color: rgba(0,0,0,0.8);
            }

            .nav-links {
                flex-direction: row;
                display: none;
            }

            .navbar.collapsed .nav-links {
                display: flex;
                flex-direction: column;
                position: absolute;
                top: 80px;
                left: 0;
                width: 100%;
                background-color: rgba(0,0,0,0.8);
            }
                
            .nav-link {
                justify-content: center;
                border: 1px solid #1A9F1A;
                width: 100%;
                border-radius: 0;
            }

            .navbar.collapsed .nav-link:hover {
                width: 100%;
                transform: scale(1.1);
            }

            .collapse-btn {
                margin: 0;
                transform: rotate(-90deg) scale(0.8);    
            }

            .navbar.collapsed .collapse-btn {
                transform: rotate(90deg) scale(0.8);
            }
        </style>
        <div class="navbar">
            <!-- Div principal da barra de navegação -->
            <div class="logo">
                <!-- Div do logo -->
                <img src="${logo}" alt="Logo" class="icon" />
                <!-- Imagem do logo, com a fonte definida pela variável 'logo' -->
                <span class="navbar-title">${title}</span>
                <!-- Título da barra de navegação, definido pela variável 'title' -->
            </div>
            <nav class="nav-links">
                <!-- Navegação com os links -->
                ${links.map(link => `
                    <a href="${link.href}" class="nav-link">
                        <!-- Link de navegação -->
                        ${link.icon ? `<img src="${link.icon}" alt="Icon" class="icon" />` : ''}
                        <!-- Se o link tiver um ícone, exibe a imagem do ícone -->
                        <span>${link.label}</span>
                        <!-- Texto do link -->
                    </a>
                `).join('')}
                <!-- Mapeia os links e os insere na navegação -->
            </nav>
            <button class="collapse-btn">
                <!-- Botão para colapsar a barra de navegação -->
                <svg width="60" height="60" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <!-- SVG do ícone do botão -->
                    <circle cx="40" cy="40" r="38.5" fill="#161616" stroke="#61656B" stroke-width="3"/>
                    <!-- Círculo do ícone -->
                    <path d="M30.6539 38.6945L43.5 25.8484L46.0922 28.4406L34.8958 39.6371L34.5422 39.9906L34.8958 40.3442L46.0922 51.5406L43.5 54.1329L30.6539 41.2868C30.6539 41.2868 30.6539 41.2868 30.6539 41.2867C30.3102 40.943 30.1171 40.4767 30.1171 39.9906C30.1171 39.5045 30.3102 39.0383 30.6539 38.6945C30.6539 38.6945 30.6539 38.6945 30.6539 38.6945Z" fill="#61656B" stroke="#61656B"/>
                    <!-- Caminho do ícone -->
                </svg>
            </button>
            <div class="footer_navbar">
                <!-- Div do rodapé da barra de navegação -->
                <button class="toggle-mode">
                    <!-- Botão para alternar o modo (ex: claro/escuro) -->
                    <img src="../../images/navbar/solar_moon-bold.png" alt="Tema" class="mode-icon" />
                    <!-- Ícone do botão de alternância de modo -->
                </button>
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
        const modeText = toggleModeBtn.querySelector("span");
        const modeIcon = toggleModeBtn.querySelector(".mode-icon");
    
        toggleModeBtn.addEventListener("click", () => {
            const isDarkMode = document.documentElement.style.getPropertyValue('--background-color') === '#161616';
    
            if (isDarkMode) {
                // Modo claro
                document.documentElement.style.setProperty('--background-color', '#DADADA');
                document.documentElement.style.setProperty('--text-color', '#161616');
                document.documentElement.style.setProperty('--background-image', 'radial-gradient(var(--lightGreen) 8%, transparent 0)');
                modeIcon.src = "../../images/navbar/solar_sun-bold.png";
            } else {
                // Modo escuro
                document.documentElement.style.setProperty('--background-color', '#161616');
                document.documentElement.style.setProperty('--text-color', '#DADADA');
                document.documentElement.style.setProperty('--background-image', 'radial-gradient(var(--darkGreen) 5%, transparent 0)');
                modeIcon.src = "../../images/navbar/solar_moon-bold.png";
            }
    
            // Atualizar o fundo e a cor do texto da página inteira
            document.body.style.backgroundColor = 'var(--background-color)';
            document.body.style.color = 'var(--text-color)';
        });
    }
    
    disconnectedCallback() {
        console.log('Navbar desconectado');
    }
}

customElements.define('nav-bar', Navbar);