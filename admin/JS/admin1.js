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

function abrirPopupEditar(id, palavra, significado, audio) {
    /*let linha = botao.parentElement.parentElement; // Pegando a linha correta*/

    //let palavra = linha.children[1].textContent;
    //let traducao = linha.children[2].textContent;
    /*let audioPath = linha.children[3].textContent;*/

    // Preenchendo os campos do popup de edição
    document.getElementById("edit_id_input").value = id;
    document.getElementById("edit_palavra_input").value = palavra;
    document.getElementById("edit_significado_input").value = significado;
    document.getElementById("edit_audio_label").innerText = audio;

    // Exibir popup e overlay
    document.getElementById("overlay-editar").style.display = "block";
    document.getElementById("popup-editar").style.display = "flex";
}

function fecharPopupEditar() {
    document.getElementById("overlay-editar").style.display = "none";
    document.getElementById("popup-editar").style.display = "none";
}

async function salvarEdicao(){
    let palavra = edit_palavra_input.value;
    let significado = edit_significado_input.value;
    let audio = edit_audio_file.files[0];
    let edit_id_palavra = edit_id_input.value;
    if( palavra == "" || significado == "" || audio == undefined || audio == null || edit_audio_label.innerText == "Áudio"){
        alert("Preencha todos os campos")
        return null;
    }

    let formdata = new FormData();

    formdata.append("id", edit_id_palavra);
    formdata.append("audio", audio);
    formdata.append("palavra", palavra);
    formdata.append("significado", significado);

    //alert("Passou")

    let obj = await fetch("../PHP/editar_palavra.php", {
        method: "POST",
        "Content-Type": "multipart/form-data",
        body: formdata
    });

    let resp = await obj.json();

    if(resp.mensagem){
        alert(resp.mensagem);
    } else {
        fecharPopupEditar();
        alert("Palavra alterada");
    }
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
    let url = `../PHP/carregar_palavras.php?query=${search_input.value}`;
    let obj = await fetch(url);
    let resp = await obj.json();
    let tmp_html = "";

    resp.palavras.map((pal, index)=>{
        let novaRow = document.createElement("div");
        //novaRow.classList.add("row");   
        /*novaRow.classList.add("campos");
        novaRow.classList.add("jb-ed");
        novaRow.innerHTML = `
            <div>${pal.id_palavra}</div>
            <div>${pal.palavra}</div>
            <div>${pal.significado}</div>
            <div>${pal.audio}</div>
            <button onclick="abrirPopupEditar(${pal.id_palavra}, '${pal.palavra}', '${pal.significado}', '${pal.audio}')">Editar</button>
        `;*/
        
        tmp_html += `
            <div class="campos jb-ed">
                <div>${pal.id_palavra}</div>
                <div>${pal.palavra}</div>
                <div>${pal.significado}</div>
                <div>${pal.audio}</div>
                <button onclick="abrirPopupEditar(${pal.id_palavra}, '${pal.palavra}', '${pal.significado}', '${pal.audio}')">Editar</button>      
            </div>
        `
        //alert(total_palavras)
    })

    document.getElementById("words-receiver").innerHTML = tmp_html;

}

carregarPalavras();
setInterval(()=>{
    carregarPalavras();
}, 2000)

function fileChanged(){
    audio_label.innerText = audio_file.files[0] ? audio_file.files[0].name : "Áudio";
}

function fileChangedEditar(){
    edit_audio_label.innerText = edit_audio_file.files[0] ? edit_audio_file.files[0].name : "Áudio";
}