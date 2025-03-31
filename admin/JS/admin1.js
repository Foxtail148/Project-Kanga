function abrirPopup() {
    
    document.body.classList.add("blur");
    document.getElementById("overlay").style.display = "block";
    document.getElementById("popup").style.display = "flex";
}

function fecharPopup() {
    document.body.classList.remove("blur"); 
    document.getElementById("overlay").style.display = "none"; 
    document.getElementById("popup").style.display = "none";
}


function editarElemento(botao) {
    let linha = botao.parentElement;

    let id = linha.children[0].textContent;
    let palavra = linha.children[1].textContent;
    let traducao = linha.children[2].textContent;
    let audioPath = linha.children[3].textContent;

    let inputs = document.querySelectorAll(".popup .inputpop");
    inputs[0].value = palavra;
    inputs[1].value = traducao;
    inputs[2].value = audioPath;

    abrirPopup();
}


function adicionarElemento() {

    let palavra = document.querySelector(".inputpop:nth-of-type(1)").value;
    let traducao = document.querySelector(".inputpop:nth-of-type(2)").value;
    let audio = document.querySelector(".inputpop:nth-of-type(3)").value;

    if (palavra.trim() === "" || traducao.trim() === "" || audio.trim() === "") {
        alert("Preencha todos os campos!");
        return;
    }

    let novaRow = document.createElement("div");
    novaRow.classList.add("row");

    novaRow.innerHTML = `
        <div>ID</div>
        <div>${palavra}</div>
        <div>${traducao}</div>
        <div>${audio}</div>
        <button onclick="abrirPopup()">Editar</button>
    `;
    document.body.appendChild(novaRow);

    document.querySelector(".inputpop:nth-of-type(1)").value = "";
    document.querySelector(".inputpop:nth-of-type(2)").value = "";
    document.querySelector(".inputpop:nth-of-type(3)").value = "";

    fecharPopup();
}


// A função do botão que vai dizer em que pagina se está
function destacarBotaoAtivo() {
    let path = window.location.pathname; 
    let btnLinguagem = document.getElementById("btn-linguagem");
    let btnProgresso = document.getElementById("btn-progresso");

    if (path.includes("admin1.html")) {
        btnLinguagem.classList.add("active-button");
    } else if (path.includes("admin2.html")) {
        btnProgresso.classList.add("active-button");
    }
}

document.addEventListener("DOMContentLoaded", destacarBotaoAtivo);

async function adicionarPalavra(){
    let palavra = palavra_input.value;
    let significado = significado_input.value;
    let audio = audio_file.files[0];

    if( palavra == "" || significado == "" || audio == undefined || audio == null || audio_label.innerText == "Áudio"){
        alert("Preencha todos os campos")
        return null;
    }

    let formdata = new FormData();

    formdata.append("audio", audio);
    formdata.append("palavra", palavra);
    formdata.append("significado", significado);

    //alert("Passou")

    let obj = await fetch("../PHP/adicionar_palavra.php", {
        method: "POST",
        "Content-Type": "multipart/form-data",
        body: formdata
    });

    let resp = await obj.json();

    if(resp.mensagem){
        alert(resp.mensagem);
    } else {
        alert("Palavra adicionada");
        palavra_input.value = ""; 
        significado_input.value = "";
        audio_file.files[0] = null;
        audio_label.innerText = "Áudio";
    }
    
}
function abrirPopupEditar(id, palavra, tipo, ) {
    let linha = botao.parentElement.parentElement; // Pegando a linha correta

    let palavra = linha.children[1].textContent;
    let traducao = linha.children[2].textContent;
    let audioPath = linha.children[3].textContent;

    // Preenchendo os campos do popup de edição
    document.getElementById("edit_palavra_input").value = palavra;
    document.getElementById("edit_significado_input").value = traducao;
    document.getElementById("edit_audio_label").innerText = audioPath;

    // Exibir popup e overlay
    document.getElementById("overlay-editar").style.display = "block";
    document.getElementById("popup-editar").style.display = "flex";
}

function fecharPopupEditar() {
    document.getElementById("overlay-editar").style.display = "none";
    document.getElementById("popup-editar").style.display = "none";
}
function deletarPalavra() {
    let palavra = document.getElementById("edit_palavra_input").value;
    
    if (!palavra) {
        alert("Nenhuma palavra selecionada para deletar.");
        return;
    }

    let confirmacao = confirm(`Tem certeza que deseja excluir a palavra "${palavra}"?`);

    if (confirmacao) {
        // Aqui você precisa adicionar a lógica para remover do banco de dados ou lista de palavras
        console.log(`Palavra "${palavra}" deletada!`);

        // Opcional: pode ser necessário chamar uma função para remover do front-end também

        fecharPopupEditar(); // Fecha o popup após deletar
    }
}

let total_palavras = 0;

async function carregarPalavras(){
    let obj = await fetch("../PHP/carregar_palavras.php");
    let resp = await obj.json();


    resp.palavras.map((palavra, index)=>{

        if(index < total_palavras)
            return null;

        let novaRow = document.createElement("div");
        novaRow.classList.add("row");   

        novaRow.innerHTML = `
            <div>${palavra.id_palavra}</div>
            <div>${palavra.palavra}</div>
            <div>${palavra.significado}</div>
            <div>${palavra.audio}</div>
            <button onclick="abrirPopupEditar(this)">Editar</button>
        `;
        
        total_palavras++;
        document.body.appendChild(novaRow);

    })

}
carregarPalavras();

function fileChanged(){
    audio_label.innerText = audio_file.files[0] ? audio_file.files[0].name : "Áudio";
}