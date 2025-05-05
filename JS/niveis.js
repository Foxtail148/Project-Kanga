let niveis;
let old_niveis = null
getNiveis();
setInterval(()=>{
	getNiveis()
}, 2000)

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
	else{
		niveis = res.data;
		let tmp_html = ["", "", "", ""];

		if(JSON.stringify(niveis) == old_niveis) return;
		old_niveis = JSON.stringify(niveis)
		niveis.map((elemento, index)=>{
			//alert(elemento.nivel_actual)
    		//document.getElementById("level-conteiner").innerHTML+=`
        	//<button onclick=${elemento.numero == elemento.nivel_actual ? "setNivel("+elemento.id_nivel+")" : "acessBlockedLevel()"} class="level  ${elemento.numero > elemento.nivel_actual && "blocked_level"} ${elemento.numero < elemento.nivel_actual && "completed_level"} ${(index + 1) % 3 == 0 ? "level-mov-right" : (index + 1) % 2 == 0 || index == 0 ? "" : "level-mov-left"}"> ${elemento.numero}</button>
     		//`
		
			let elemento_fase = document.querySelector(`#fase${elemento.id_fase}-cnt`);
			/*elemento_fase.innerHTML += `
				<button class="level ${elemento.id_nivel == elemento.nivel_actual || elemento.estado ? "" : "disabled-level"}" onclick="${(elemento.nivel_actual == elemento.id_nivel || elemento.estado) ? (elemento.hp > 0 ? `setNivel(${elemento.id_nivel})` : "lowHp()") : "acessBlockedLevel()"}">
					${elemento.id_nivel == elemento.nivel_actual || !elemento.estado ? `<i class="fa-solid fa-star fa-4x"></i>` : `<i class="fa-solid fa-check fa-4x"></i>`}
				</button>
			`*/
			tmp_html[elemento.id_fase - 1] += `
				<button class="level ${elemento.id_nivel == elemento.nivel_actual || elemento.estado ? "" : "disabled-level"}" onclick="${(elemento.nivel_actual == elemento.id_nivel || elemento.estado) ? (elemento.hp > 0 ? `setNivel(${elemento.id_nivel})` : "lowHp()") : "acessBlockedLevel()"}">
					${elemento.estado ? `<i class="fa-solid fa-check fa-4x"></i>` : `<i class="fa-solid fa-star fa-4x"></i>`}
				</button>
			`
			//alert(elemento.estado)
  		})
  		
		document.querySelector(`#fase1-cnt`).innerHTML = tmp_html[0]
		document.querySelector(`#fase2-cnt`).innerHTML = tmp_html[1]
		document.querySelector(`#fase3-cnt`).innerHTML = tmp_html[2]
		document.querySelector(`#fase4-cnt`).innerHTML = tmp_html[3]

	}

	console.log(niveis);
	return true;
}


function setNivel(id_nivel) {
	//alert(id_nivel);
	location.href = "../jogar?nivel="+id_nivel
}

function acessBlockedLevel(){
	alert("Nível indisponível")
}

function lowHp(){
	alert("HP baixo")
}
//let params = new URL(location.href).searchParams;
//alert(params.get("nivel"))