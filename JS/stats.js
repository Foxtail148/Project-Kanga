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

		//alert(resp.data.hp)
	}
}

getStats()