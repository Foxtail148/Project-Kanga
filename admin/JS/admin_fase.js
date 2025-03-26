/*function adicionarNivelHtml(nivel, total_jog) {

    let novaRow = document.createElement("div");
    novaRow.classList.add("teste");

    let divNivel = document.createElement("div");
    divNivel.innerHTML = `<span>Nível ${nivel} </span>`;

    let divJogabilidades = document.createElement("div");
    divJogabilidades.innerHTML = "<span>Num. Jogabilidades</span>";

    let divNum = document.createElement("div");
    divNum.innerHTML = `<span>${total_jog}</span>`;

    let divVer = document.createElement("div");
    let btnVer = document.createElement("button");
    btnVer.textContent = "Ver";
    btnVer.onclick = function() {
        irParaPagina('admin_fase1_nivel1.html');
    };
    divVer.appendChild(btnVer);

    let divEliminar = document.createElement("div");
    let btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.onclick = function() {
        novaRow.remove();
    };
    divEliminar.appendChild(btnEliminar);

    novaRow.appendChild(divNivel);
    novaRow.appendChild(divJogabilidades);
    novaRow.appendChild(divNum);
    novaRow.appendChild(divVer);
    novaRow.appendChild(divEliminar);

    document.body.appendChild(novaRow);
}*/

function carregarFase(){
    let params = new URL(location.href).searchParams;

    //alert(params.get("fase"))
    document.querySelector(".fase-row span").innerText = "Fase " + params.get("fase");


}

carregarFase()


async function adicionarNivel(){
    let params = new URL(location.href).searchParams;

    let xp = xp_input.value;
    let fase = params.get("fase");

    let formdata = new FormData();

    formdata.append("xp", xp);
    formdata.append("fase", fase); 

    let obj = await fetch("../PHP/adicionar_nivel.php", {
        method: "POST",
        "Content-Type": "multipart/form-data",
        body: formdata
    });

    let resp = await obj.json();

    if(resp.mensagem)
        alert(resp.mensagem)
    else
        alert("Nível adicionado")

    //alert(1)
}

let total_niveis = 0;
async function carregarNiveis(){
    let params = new URL(location.href).searchParams;
    let obj = await fetch("../PHP/carregar_niveis.php?fase="+params.get("fase"));
    let resp = await obj.json();


    resp.niveis.map((nivel, index)=>{

        if(index < total_niveis)
            return null;

        document.body.innerHTML += `
            <div class="teste" >
                <div> <span>Nível ${nivel.numero}</span></div>
                <div><span>Num. Jogabilidades</span></div>
                <div><span>${nivel.total_jog}</span></div>

                <div><button onclick="irParaPagina('admin_fase1_nivel1.html?nivel=${nivel.numero}&nivel_id=${nivel.id_nivel}&fase=${params.get("fase")}')">Ver</button></div>
                <div><button onclick="eliminarElemento(this)">Eliminar</button></div>
            </div>
        `

        total_niveis++;

    })

}
carregarNiveis();
