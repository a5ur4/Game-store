// script.js

document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
    const collapseBtn = document.querySelector(".collapse-btn");
    const toggleModeBtn = document.querySelector(".toggle-mode");

    // Toggle collapse
    collapseBtn.addEventListener("click", () => {
        navbar.classList.toggle("collapsed");
    });

    // Toggle light/dark mode text
    toggleModeBtn.addEventListener("click", () => {
        const modeText = toggleModeBtn.querySelector("span");
        modeText.textContent =
        modeText.textContent === "Modo Claro" ? "Modo Escuro" : "Modo Claro";
    });
});
