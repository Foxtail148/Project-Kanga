// function addJB() {
 
//     let novaJB = document.createElement("div");
//     novaJB.classList.add("jb-ed", "rows");

//     novaJB.innerHTML = `
//         <div class="campos">
//             <div>TIPO: <span>Significado</span></div>
//             <div><span>Palavra Chave</span></div>
//             <div>Palavra subsequente</div>
//             <div>Palavra subsequente</div>
//         </div>
//         <button onclick="abrirPopup()">Editar</button>
//     `;
//     document.body.appendChild(novaJB);

//     fecharPopup();
// }

async function addJB() {
    let params = new URL(location.href).searchParams;
    let formdata = new FormData();

    for(let index = 0; index < palavras_escolhidas.length; index++){
        let palavra = palavras_escolhidas[index];
        /*1 - 2;
        1 - 3
        1 - 4

        2 - 3;
        2 - 4;

        3 - 4*/
        let t = document.querySelector(".lb-pf select").value.toLowerCase();
        if(!palavra && index < 3 ){
            alert("Palavras em falta");
            return null;
        }
        else if(!palavra && t == "pares"){
            alert("Palavras em falta");
            return null;
        }
        else{

        }
    }

    if(palavras_escolhidas[0] == palavras_escolhidas[1]){
        alert("Não coloque palavras iguais")
        return null;
    }

    if(palavras_escolhidas[0] == palavras_escolhidas[2]){
        alert("Não coloque palavras iguais")
        return null;
    }

    if(palavras_escolhidas[0] == palavras_escolhidas[3]){
        alert("Não coloque palavras iguais")
        return null;
    }

    if(palavras_escolhidas[1] == palavras_escolhidas[2]){
        alert("Não coloque palavras iguais")
        return null;
    }

    if(palavras_escolhidas[1] == palavras_escolhidas[3]){
        alert("Não coloque palavras iguais")
        return null;
    }

    if(palavras_escolhidas[2] == palavras_escolhidas[3]){
        alert("Não coloque palavras iguais")
        return null;
    }


    formdata.append("tipo", document.querySelector(".lb-pf select").value.toLowerCase());
    formdata.append("nivel", params.get("nivel_id"));
    formdata.append("palavras", palavras_escolhidas);

    let obj = await fetch("../PHP/adicionar_jogabilidade_nivel.php", {
        method: "POST",
        "Content-Type": "multipart/form-data",
        body: formdata
    });
    
    let resp = await obj.json();

    if(resp.mensagem)
        alert(resp.mensagem)
    else{
        alert("Jogabilidade adicionada");
        document.getElementById("palavraPrincipal").value = "";
        document.getElementById("palavra2").value = "";
        document.getElementById("palavra3").value = "";
        document.getElementById("palavra4").value = "";

        document.getElementById("palavraPrincipal").style = "";
        document.getElementById("palavra2").style = "";
        document.getElementById("palavra3").style = "";
        document.getElementById("palavra4").style = "";

        palavras_escolhidas = [null, null, null, null];
    }

    /*let tipo = document.getElementById("tipo").textContent;
    let palavraPrincipal = document.getElementById("palavraPrincipal").value;
    let palavra2 = document.getElementById("palavra2").value;
    let palavra3 = document.getElementById("palavra3").value;
    let palavra4 = document.getElementById("palavra4").value;

    if (palavraPrincipal.trim() === "" || palavra2.trim() === "" || palavra3.trim() === "" || palavra4.trim() === "") {
        alert("Preencha todos os campos!");
        return;
    }

    let novaJB = document.createElement("div");
    novaJB.classList.add("jb-ed");


    novaJB.innerHTML = `
        <div class="campos">
            <div>TIPO: <span>${tipo}</span></div>
            <div><span>${palavraPrincipal}</span></div>
            <div>${palavra2}</div>
            <div>${palavra3}</div>
            <div>${palavra4}</div>
        </div>
        <button onclick="abrirPopup()">Editar</button>
    `;

    document.body.appendChild(novaJB); // Adiciona no final do body

    fecharPopup();*/

}



function dadosIniciais(){
    let params = new URL(location.href).searchParams;
    let nivel = params.get("nivel");
    let nivel_id = params.get("nivel_id");
    let fase = params.get("fase");

    document.querySelector(".fase-row.second span").innerText = "Fase "+ fase;
    document.querySelector(".fase-row.nivel-span span").innerText = "Nível "+ nivel;
}

dadosIniciais()


function mudarJogabilidade(valor){
    if(valor.toLowerCase() == "significado" || valor.toLowerCase() == "áudio"){
        
        document.querySelector(".lb-search.pop.last-word input").style = "";
        document.querySelector(".lb-search.pop.last-word input").value = "";
        document.querySelector(".lb-search.pop.last-word").style.display = "none";
        palavras_escolhidas[3] = null;
    } else{
        document.querySelector(".lb-search.pop.last-word").style.display = "flex";
    }
}

let palavras_escolhidas = [null, null, null, null];

async function pesquisarPalavra(input, number, e){
    if(e.key != "Enter")
        return null

    if(input.value){
        let obj = await fetch("../PHP/pesquisar_palavra.php?palavra="+input.value);
        let resp = await obj.json();

        if(resp.palavra){
            //input.style.boxShadow = "0 0 0 3px #00dd00bb"
            input.style.borderColor = "#00dd00bb"
            input.style.color = ""
            input.value = resp.palavra.palavra
            palavras_escolhidas[number -1] = resp.palavra.id_palavra

            console.log(palavras_escolhidas)
        } else {
            //input.style.boxShadow = "0 0 0 3px #ff8080bb"
            input.style.borderColor = "#ff8080bb"
            input.style.color = "#ff8080bb"
            document.querySelectorAll("div.input.inputpop")[number - 1].style.color = "#ff8080bb";
            document.querySelectorAll("div.input.inputpop")[number - 1].innerText = "palavra não encontrada"

            setTimeout(()=>{
                //input.style.boxShadow = ""
                //input.style.borderColor = ""
                //input.style.color = ""
                document.querySelectorAll("div.input.inputpop")[number - 1].style.color = "";
                document.querySelectorAll("div.input.inputpop")[number - 1].innerText = ""
            }, 2000)
        }
    }
}

let total_jogabilidades = 0;

async function carregarJogabilidades(){
    let params = new URL(location.href).searchParams;
    let obj = await fetch("../PHP/carregar_jogabilidades.php?nivel="+params.get("nivel_id"));
    let resp = await obj.json();

    resp.jogabilidades.map((jogabilidade, index)=>{
        let con = "";
        jogabilidade.palavras.map((pal, ind)=>{
            con += `
            <div>
                ${pal.palavra}
            </div>
            `
        })

        document.body.innerHTML += `
        <div class="jb-ed">
            <div class="campos">
                <div>TIPO: <span>${jogabilidade.tipo}</span></div>
                ${
                 con   
                    
                }
            </div>
            <button onclick="abrirPopup()">Editar</button>
        </div>
        `
    })
}


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

carregarJogabilidades();