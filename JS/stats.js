let stats = {hp:0, xp: 0};

async function getStats(){
	let formData = new FormData();

	formData.append("id_aluno", localStorage.getItem("id"));

	let obj = await fetch("../PHP/inicio_stats.php", {
		method: "POST",
		body: formData
	})

	let resp = await obj.json()

	if(resp.message)
		alert(resp.message)
	else{
		//alert(resp.data)
		document.querySelector(".total.hp span").innerText = resp.data.hp
		document.querySelector(".total.xp span").innerText = resp.data.xp
		stats.hp = resp.data.hp
		stats.xp = resp.data.xp

		document.querySelector(".start_btn").onclick = function(){
			location.href = "../jogar?nivel="+resp.data.nivel_actual
		}

		if(resp.data.hp < 5){
			document.querySelector(".char").style.display = "flex"
		} else {
			document.querySelector(".char").style.display = "none"
		}
		//alert(resp.data.hp)
	}
}

/*function formatarTempo(segundos) {
    const m = Math.floor(segundos / 60);
    const s = segundos % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

let auto_hp_interval = null;

async function getCountdown(){

	if(auto_hp_interval !== null) return;

	let formData = new FormData();
	formData.append("aluno", localStorage.getItem("id"));

	let obj = await fetch("../PHP/auto_hp.php", {
		method: "POST",
		body: formData
	});
	let res = await obj.json();

	//console.log(obj)
	if(res.erro){
		alert(res.erro)
		return;
	}

	let tempo = res.tempo_restante;
        document.querySelector('.span_countdown').innerText = `${formatarTempo(tempo)}`;

        auto_hp_interval = setInterval(() => {
                tempo--;
                if (tempo <= 0) {
                   	clearInterval(auto_hp_interval);
            		auto_hp_interval = null;
            		getCountdown();
                }  else {
            		document.querySelector('.span_countdown').innerText = formatarTempo(tempo);
        		}
        }, 1000);
}*/


getStats()
setInterval(()=>{
	getStats()
}, 500)

/*
window.addEventListener("focus", function(){
    if(auto_hp_interval){
        clearInterval(auto_hp_interval);
        auto_hp_interval = null;
    }
    getCountdown();
});

// Dispara countdown inicialmente de forma segura
window.dispatchEvent(new Event("focus"));*/
/*
let timeoutId = null;
let tempoFinal = null;

function formatarTempo(segundos) {
    const m = Math.floor(segundos / 60);
    const s = segundos % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

async function iniciarContador() {
    // Evita múltiplas execuções
    if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
    }

    const formData = new FormData();
    formData.append("aluno", localStorage.getItem("id"));

    const obj = await fetch("../PHP/auto_hp.php", {
        method: "POST",
        body: formData
    });
    const res = await obj.json();

    if (res.erro) {
        alert(res.erro);
        return;
    }

    // Salva o timestamp do momento em que o tempo terminará
    tempoFinal = Date.now() + (res.tempo_restante * 1000);
    tick();
}

function tick() {
    const agora = Date.now();
    let restante = Math.round((tempoFinal - agora) / 1000);

    if (restante <= 0) {
        document.querySelector('.span_countdown').innerText = "00:00";
        timeoutId = null;
        iniciarContador(); // Recomeça o ciclo
        return;
    }

    document.querySelector('.span_countdown').innerText = formatarTempo(restante);
    timeoutId = setTimeout(tick, 1000);
}

// Início seguro
window.addEventListener("focus", iniciarContador);
window.dispatchEvent(new Event("focus"));
*/
let proximaRecargaTimestamp = null; // em milissegundos

function formatarTempo(segundos) {
    const m = Math.floor(segundos / 60);
    const s = segundos % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

async function getCountdown() {
    let formData = new FormData();
    formData.append("aluno", localStorage.getItem("id"));

    let obj = await fetch("../PHP/auto_hp.php", {
        method: "POST",
        body: formData
    });
    let res = await obj.json();

    if (res.erro) {
        alert(res.erro);
        return;
    }

    // Armazena o próximo timestamp da vida (em milissegundos)
    proximaRecargaTimestamp = new Date(res.proxima_vida_em).getTime();
}

// Atualiza contador visual a cada segundo
setInterval(() => {
    if (!proximaRecargaTimestamp) {
        document.querySelector('.span_countdown').innerText = "00:00";
        return;
    }

    const agora = Date.now();
    let restante = Math.floor((proximaRecargaTimestamp - agora) / 1000);

    if (restante <= 0) {
    	 document.querySelector('.span_countdown').innerText = "00:00"
        getCountdown(); // nova recarga
        return;
    }

    document.querySelector('.span_countdown').innerText = formatarTempo(restante);
}, 1000);

// Atualiza ao focar na aba
window.addEventListener("focus", () => {
    getCountdown();
});

// Inicializa
getCountdown();
