// document.addEventListener("DOMContentLoaded", function() {
//     fetch("header.html")  // Busca o conteúdo do header
//         .then(response => response.text()) // Converte para texto
//         .then(data => {
//             document.getElementById("header-container").innerHTML = data; // Insere no HTML
//         })
//         .catch(error => console.error("Erro ao carregar o header:", error));
//
// Farei essa locura quando tiver tempo
// 
//  });

function irParaPagina(url) {
    window.location.href = url;
}