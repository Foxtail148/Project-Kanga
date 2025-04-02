let niveis;
getNiveis();

async function getNiveis(){
	const themes = [
        { bg: "#0B76DD", border: "#00264B", shadow: "#00264B", btn: "#60B1FF", btnBorder: "#00366B", btnShadow: "#00366B" }, // f1
        { bg: "#F03986", border: "#D21C66", shadow: "#D21C66", btn: "#F03986", btnBorder: "#571530", btnShadow: "#571530" }, // f2
        { bg: "#FFC93E", border: "#D99F00", shadow: "#D99F00", btn: "#FFBB00", btnBorder: "#5A4102", btnShadow: "#5A4102" }, // f3
        { bg: "#2CA251", border: "#087F2D", shadow: "#087F2D", btn: "#10B544", btnBorder: "#087F2D", btnShadow: "#087F2D" }  // f4
    ];
	let formData = new FormData();
	//alert(localStorage.getItem("id"));
	formData.append("id_aluno", localStorage.getItem("id"));

	let obj = await fetch("../PHP/niveis.php", {
		method: "POST",
		body: formData
	})

	let res = await obj.json();
    console.log("Resposta do servidor:", res); 
	
	if(res.message)
		alert(res.message)
	else
		niveis = res.data;

	niveis.map((elemento, index)=>{
		//alert(elemento.nivel_actual)
    	//document.getElementById("level-conteiner").innerHTML+=`
        //<button onclick=${elemento.numero == elemento.nivel_actual ? "setNivel("+elemento.id_nivel+")" : "acessBlockedLevel()"} class="level  ${elemento.numero > elemento.nivel_actual && "blocked_level"} ${elemento.numero < elemento.nivel_actual && "completed_level"} ${(index + 1) % 3 == 0 ? "level-mov-right" : (index + 1) % 2 == 0 || index == 0 ? "" : "level-mov-left"}"> ${elemento.numero}</button>
     	//`
		
		let elemento_fase = document.querySelector(`#fase${elemento.id_fase}-cnt`);
		elemento_fase.innerHTML += `
			<button class="level" onclick="location.href = '../jogar?nivel=${elemento.id_nivel}'"><i class="fa-solid fa-star fa-4x"></i></button>
		`

		//alert()
  	})

	console.log(niveis);
	return true;
}


function setNivel(id_nivel) {
	alert(id_nivel);
	location.href = "../jogar?nivel="+id_nivel
}

function acessBlockedLevel(){
	alert("Nível indisponível")
}
//let params = new URL(location.href).searchParams;
//alert(params.get("nivel"))