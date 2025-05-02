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

function formatarTempo(segundos) {
    const m = Math.floor(segundos / 60);
    const s = segundos % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

let auto_hp_interval = null;

async function getCountdown(){
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
                    if(auto_hp_interval){
                    	clearInterval(auto_hp_interval);
                    }
                    getCountdown();
                }
                //document.getElementById('vidas').innerText = `Vidas: ${vidaAtual}/${vidaMax}`;
                document.querySelector('.span_countdown').innerText = `${formatarTempo(tempo)}`;
        }, 1000);
}


getStats()
setInterval(()=>{
	getStats()
}, 500)

getCountdown()
window.addEventListener("pageshow", function(){
	if(auto_hp_interval){
        clearInterval(auto_hp_interval);
    }
    getCountdown();

    //alert(1)
})

window.addEventListener("focus", function(){
	if(auto_hp_interval){
        clearInterval(auto_hp_interval);
    }
    getCountdown();

    //alert(1)
})