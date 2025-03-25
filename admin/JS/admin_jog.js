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

function addJB() {

    
    
    let tipo = document.getElementById("tipo").textContent;
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

    fecharPopup();
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