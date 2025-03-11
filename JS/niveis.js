let niveis;
getNiveis();

async function getNiveis(){
	let formData = new FormData();
	//alert(localStorage.getItem("id"));
	formData.append("id_aluno", localStorage.getItem("id"));

	let obj = await fetch("../api/niveis.php", {
		method: "POST",
		body: formData
	})

	let res = await obj.json();

	if(res.message)
		alert(res.message)
	else
		niveis = res.data;

	niveis.map((elemento, index)=>{
		//alert(elemento.nivel_actual)
    document.getElementById("level-conteiner").innerHTML+=`
        <button onclick=${elemento.numero == elemento.nivel_actual ? "setNivel("+elemento.id_nivel+")" : "acessBlockedLevel()"} class="level ${elemento.estado && elemento.estado == "completo" && "completed_level"} ${elemento.numero != elemento.nivel_actual && "blocked_level"} ${(index + 1) % 3 == 0 ? "level-mov-right" : (index + 1) % 2 == 0 || index == 0 ? "" : "level-mov-left"}"> ${elemento.numero}</button>
     `
  })
	console.log(niveis);
	return true;
}


function  setNivel(id_nivel) {
	//alert(id_nivel)
	location.href = "../jogar?nivel="+id_nivel
}

function	acessBlockedLevel(){
	alert("Nível indisponível")
}
//let params = new URL(location.href).searchParams;
//alert(params.get("nivel"))