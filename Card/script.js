// script.js

function openModal() {
    document.getElementById("product-modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("product-modal").style.display = "none";
}

// Fecha o modal ao clicar fora dele
window.onclick = function(event) {
    const modal = document.getElementById("product-modal");
    if (event.target === modal) {
    modal.style.display = "none";
    }
};
