let tentativas = 5;
let jogo_actual = null;
let menus = [];
let progress = 0;

let choosenPairsElement = null;
let choosenPairsValue = null;

let correctSignWord = null;

let correctAudioWord = null;

function updateTentativas(){
	tentativasSpan.innerText = tentativas;
}

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);

  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

async function pegarDados() {
	let params = await new URL(location.href).searchParams;
	//alert(params.get("nivel"))	

	let formData = new FormData();
	formData.append("nivel", params.get("nivel"));
	formData.append("aluno", localStorage.getItem("id"));

	let obj	= await	fetch("../PHP/jogabilidade.php", {
		method: "POST",
		body: formData
	});

	let res = await	obj.json();

	if(res.message)
		alert(res.message)
	else{
		res.data.map((elemento, index)=>{
				//if(elemento.tipo == "significado"){
					menus = [...menus, {tipo: elemento.tipo, palavras: elemento.palavras, ended: false}];
				//}

		})

		tentativas = res.hp;
		//console.log(menus)
		updateProgress();

		iniciar();
	}
}

function iniciar(){
	//document.querySelector(".gamingSectionText").innerText = "O que significa "+`"`+menus[jogo_actual].texto+`"`+"?";

	if(progress >= menus.length){
		proximoNivel();
		return;
	}

	let tmp_menu = getRandomInt(0, menus.length);
	
	if((menus[tmp_menu].tipo != "significado" && menus[tmp_menu].tipo != "pares" && menus[tmp_menu].tipo != "áudio") || menus[tmp_menu].ended || tmp_menu == jogo_actual){

		iniciar();

		return;
	}

	jogo_actual = tmp_menu;

	if(menus[jogo_actual].tipo == "significado"){
		document.querySelector(".gamingSection.jogAudio").style.display = "none"
		document.querySelector(".gamingSection.jogPares").style.display = "none"

		let tmp_int = getRandomInt(0, menus[jogo_actual].palavras.length);
		correctSignWord = menus[jogo_actual].palavras[tmp_int].significado;
		document.querySelector(".gamingSectionText").innerText = `Como se diz "${menus[jogo_actual].palavras[tmp_int].palavra}"?`;
		//console.log(correctSignWord)
		let tmp_element = document.querySelector(".gamingSection.jogSign");
		console.log(tmp_element)
		tmp_element.innerHTML = ""
		tmp_element.style.display = "flex"
		menus[jogo_actual].palavras.map((elemento, index)=>{
			//alert(elemento.significado)
			tmp_element.innerHTML+=`
				<div class="gamingSectionWord" onclick='chooseWordSignificado(this, "${elemento.significado}")'>${elemento.significado}</div>
			`
		})
	}

	if(menus[jogo_actual].tipo == "áudio"){
		document.querySelector(".gamingSection.jogSign").style.display = "none"
		document.querySelector(".gamingSection.jogPares").style.display = "none"

		let tmp_int = getRandomInt(0, menus[jogo_actual].palavras.length);
		correctAudioWord = menus[jogo_actual].palavras[tmp_int].significado;
		document.querySelector(".gamingSectionText").innerText = `O que diz aqui:`;
		document.querySelector(".jogAudio audio source").src = `../admin/AUDIO/${menus[jogo_actual].palavras[tmp_int].audio}`

		//alert(document.querySelector(".jogAudio audio source").src)
		//console.log(correctSignWord)
		let tmp_element = document.querySelector(".gamingSection.jogAudio");
		console.log(tmp_element)
		document.querySelector(".gamingSection.jogAudio .gamingSectionBar").innerHTML = ""
		tmp_element.style.display = "flex"
		menus[jogo_actual].palavras.map((elemento, index)=>{
			//alert(elemento.significado)
			document.querySelector(".gamingSection.jogAudio .gamingSectionBar").innerHTML+=`
				<div class="gamingSectionWord" onclick='chooseWordAudio(this, "${elemento.significado}")'>${elemento.palavra}</div>
			`
		})
	}

	if(menus[jogo_actual].tipo == "pares"){
		choosenPairsElement = null
		choosenPairsValue = null
		document.querySelector(".gamingSection.jogAudio").style.display = "none"
		document.querySelector(".gamingSection.jogSign").style.display = "none"

		document.querySelector(".gamingSectionText").innerText = `Combine os pares:`;
		//console.log(correctSignWord)
		let tmp_element = document.querySelector(".gamingSection.jogPares");
		console.log(tmp_element)
		//tmp_element.innerHTML = ""
		document.querySelector(".gamingSection.jogPares .paresPt").innerHTML = ""
		document.querySelector(".gamingSection.jogPares .paresKm").innerHTML = ""
		tmp_element.style.display = "flex"

		menus[jogo_actual].palavras.map((elemento, index)=>{
			let fim1 = getRandomInt(0, 2);
			let fim2 = getRandomInt(0, 2);
			//alert(elemento.significado)
			if(fim1){
				document.querySelector(".gamingSection.jogPares .paresPt").innerHTML+=`
					<div class="gamingSectionWord pt" onclick='chooseWordPares(this, "${elemento.palavra}")'>${elemento.palavra}</div>
				`
			}
			else{
				document.querySelector(".gamingSection.jogPares .paresPt").innerHTML=`
					<div class="gamingSectionWord pt" onclick='chooseWordPares(this, "${elemento.palavra}")'>${elemento.palavra}</div>
				` + document.querySelector(".gamingSection.jogPares .paresPt").innerHTML
			}

			if(fim2){
				document.querySelector(".gamingSection.jogPares .paresKm").innerHTML+=`
					<div class="gamingSectionWord km" onclick='chooseWordPares(this, "${elemento.palavra}")'>${elemento.significado}</div>
				`
			}
			else{
				document.querySelector(".gamingSection.jogPares .paresKm").innerHTML=`
					<div class="gamingSectionWord km" onclick='chooseWordPares(this, "${elemento.palavra}")'>${elemento.significado}</div>
				` + document.querySelector(".gamingSection.jogPares .paresKm").innerHTML;
			}
		})
	}
}

async function chooseWordSignificado(element, value){
	/*temps = document.querySelectorAll(".gamingSectionWord");
	for(el of temps){
		el.setAttribute("class", "gamingSectionWord")
	}*/
	let tmp_element_class = element.getAttribute("class");
	//alert(value)
	if(value == correctSignWord){
		element.setAttribute("class", tmp_element_class+" gamingSectionRightWord")
		menus[jogo_actual].ended = true;
		progress ++;
		updateProgress()

		await sleep(1000);
		iniciar();
	}
	else{
		element.setAttribute("class", tmp_element_class+" gamingSectionWrongWord")
		errou();
		tentativas--
		updateProgress()

		updateProgress()
	}

	
}

async function chooseWordAudio(element, value){
	let tmp_element_class = element.getAttribute("class");
	//alert(value)
	if(value == correctAudioWord){
		element.setAttribute("class", tmp_element_class+" gamingSectionRightWord")
		menus[jogo_actual].ended = true;
		progress ++;
		updateProgress()
		if(audioPlaying) playAudio();
		await sleep(1000);
		iniciar();
	}
	else{
		element.setAttribute("class", tmp_element_class+" gamingSectionWrongWord")
		errou();
		tentativas--
		updateProgress()
	}

	
}

async function chooseWordPares(element, value){
	let tmp_element_class = element.getAttribute("class");
	if(tmp_element_class.includes("correctWord") || tmp_element_class.includes("gamingSectionRightWord") || tmp_element_class.includes("gamingSectionWrongWord"))
		return;

	if(!choosenPairsElement){
		choosenPairsElement = element;
		choosenPairsValue = value;


		element.setAttribute("class", tmp_element_class+" selectedWord");
	}

	else{
		
		let tmp_element_class2 = choosenPairsElement.getAttribute("class");
		if((tmp_element_class.includes("km") && tmp_element_class2.includes("km")) || (tmp_element_class.includes("pt") && tmp_element_class2.includes("pt"))){
			return;
		}


		if(value == choosenPairsValue){
			//alert("certo")

			updateProgress();
			choosenPairsElement.setAttribute("class", "gamingSectionWord gamingSectionRightWord")
			element.setAttribute("class", "gamingSectionWord gamingSectionRightWord")
			
			await sleep(500)
			element.setAttribute("class", "gamingSectionWord correctWord")
			choosenPairsElement.setAttribute("class", "gamingSectionWord correctWord")

			let all_corrects = document.querySelectorAll(".jogPares .correctWord");
			let all_elements = document.querySelectorAll(".jogPares .gamingSectionWord");

			if(all_elements.length == all_corrects.length){
				menus[jogo_actual].ended = true;
				progress ++;
				updateProgress()

				await sleep(1000);
				iniciar();
			}

			updateProgress();
		}

		else {
			errou();
			tentativas--
			updateProgress();
			choosenPairsElement.setAttribute("class", "gamingSectionWord gamingSectionWrongWord")
			element.setAttribute("class", "gamingSectionWord gamingSectionWrongWord")
			
			await sleep(500)
			element.setAttribute("class", `gamingSectionWord ${tmp_element_class.includes("km") ? "km" : "pt"}`)
			choosenPairsElement.setAttribute("class", `gamingSectionWord ${tmp_element_class2.includes("km") ? "km" : "pt"}`)
		}

		choosenPairsElement = null
		choosenPairsValue = null
	}
}

async function acertou(element){
	//alert("Acertou")
	element.setAttribute("class", "gamingSectionWord gamingSectionRightWord")
	//alert(element)
	updateTentativas();
	progress += 1;
	document.querySelector(".progressBar div").style.width = ((progress * 100) / menus.length) + "%";
	if(jogo_actual < menus.length - 1){
		await sleep(1000);

		temps = document.querySelectorAll(".gamingSectionWord");
		for(el of temps){
			el.style.display = "none"
		}

		jogo_actual ++
		iniciar();
	} else {
		//alert("Muitos parabéns!");
		await sleep(1000)
		await proximoNivel();
		location.href = "../html/Interface.html"
	}
}

async function errou(){
	/*element.setAttribute("class", "gamingSectionWord gamingSectionWrongWord")
	if(tentativas == 1){
		location.href = location.href
	}
	tentativas --;
	updateTentativas()
	//alert("Errou")
	*/
	await fetch("../PHP/decreaseHp.php?aluno="+(localStorage.getItem("id")));
}

async function proximoNivel(){
	let params = await new URL(location.href).searchParams;
	//alert(params.get("nivel"))	

	let formData = new FormData();
	formData.append("nivel", params.get("nivel"));
	formData.append("aluno", localStorage.getItem("id"));
	//alert(localStorage.getItem("id"))
	let obj	= await	fetch("../PHP/proximo_nivel.php", {
		method: "POST",
		body: formData
	});

	let resp = await obj.json();

	if(resp.message)
		alert(resp.message)
	else{
		alert("Nível completado!");
		location.href = "../HTML/Interface.html"
	}
}

async function updateProgress(){
	document.querySelector(".progressBar div").style.width = ((progress * 100) / menus.length) + "%";
	document.querySelector("#tentativasSpan").innerText = tentativas;
	

	if(tentativas == 0){
		await sleep(1000)
		alert("Fim do número de tentativas")
		location.href = "../HTML/Interface.html"
	}
}

function skip(){
	if(audioPlaying) playAudio()
	iniciar();
}

let audioPlaying = false;
//console.log(document.querySelector(".jogAudio audio"));
function playAudio(){
	document.querySelector(".jogAudio audio").load();
	if(!audioPlaying)
		document.querySelector(".jogAudio audio").play();
	else
		document.querySelector(".jogAudio audio").pause();

	audioPlaying = !audioPlaying
}

updateProgress()
pegarDados()