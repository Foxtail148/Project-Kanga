let tentativas = 5;
let jogo_actual = 0;
let menus = [];
let progress = 0;
function updateTentativas(){
	tentativasSpan.innerText = tentativas;
}
function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);

  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

async function jogar() {
	let params = await new URL(location.href).searchParams;
	//alert(params.get("nivel"))	

	let formData = new FormData();
	formData.append("nivel", params.get("nivel"));

	let obj	= await	fetch("../api/jogabilidade.php", {
		method: "POST",
		body: formData
	});

	let res = await	obj.json();

	if(res.message)
		alert(message)
	else{
		res.data.map((elemento, index)=>{
				if(elemento.tipo == "significado"){
					let random = getRandomInt(0, elemento.data.length);
					menus = [...menus, {tipo: elemento.tipo, texto: elemento.data[random].palavra, resposta: elemento.data[random].significado, data: elemento.data}];
					console.log(menus)
				}
		})

	updateTentativas()
	iniciar()
	}
}
async function iniciar(){
	document.querySelector(".gamingSectionText").innerText = "O que significa "+`"`+menus[jogo_actual].texto+`"`+"?";

	menus[jogo_actual].data.map((elemento, index)=>{
		document.querySelector(".gamingSection").innerHTML+=`
		<div class="gamingSectionWord" onClick="chooseWordSignificado(this)">${elemento.significado}</div>
		`
	})
}

function chooseWordSignificado(element){
	temps = document.querySelectorAll("gamingSectionWord");
	for(el of temps){
		el.setAttribute("class", "gamingSectionWord")
	}
	if(element.innerText == menus[jogo_actual].resposta){
		acertou(element)
	}
	else{
		errou(element);
	}
}

async function acertou(element){
	//alert("Acertou")
	element.setAttribute("class", "gamingSectionWord gamingSectionRightWord")
	//alert(element)
	updateTentativas();
	document.querySelector(".progressBar div").style.width = ((1 * 100) / menus.length) + "%"; 
}

async function errou(element){
	element.setAttribute("class", "gamingSectionWord gamingSectionWrongWord")
	tentativas --;
	updateTentativas()
	//alert("Errou")
}
jogar()