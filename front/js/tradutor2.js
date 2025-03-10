const campo_pesquisa = document.getElementById("campo-pesquisa");
const botao_pesquisa = document.getElementById("botao-pesquisa");
const resultado_pesquisa = document.getElementById("lacuna-pesquisa");
const formulario = document.getElementById("pesquisa_form");

    formulario.addEventListener('submit', function (evento) {
    evento.preventDefault(); // Impede recarregamento página

    const texto = campo_pesquisa.value.trim();
    if (texto === "") {
        resultado_pesquisa.textContent = "Digite algo para pesquisar";
        return;
    }

    fetch("../../back/php/pesquisar2.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" }, //Informa que é um tipo formdata
        body: "palavra=" + encodeURIComponent(texto) //Trata das acentuações
    })
// Quando a resposta chegar, transforma em JSON
   .then(resposta => resposta.text()) // Recebe a resposta como texto (HTML)
   .then(dados => {
    resultado_pesquisa.innerHTML = dados; // Atualiza o HTML com os resultados
})
.catch(() => {
    resultado_pesquisa.innerHTML = "Erro ao buscar resultados.";
}); 
});