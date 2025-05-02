async function getData(){
	let formData = new FormData();

	formData.append("id_aluno", localStorage.getItem("id"));

	let obj = await fetch("../PHP/perfil_data.php", {
		method: "POST",
		body: formData
	})

	let resp = await obj.json()

	if(resp.message)
		alert(resp.message)
	else{
		//alert(resp.data)
		document.querySelector(".span_name").innerText = resp.data.nome
		document.querySelector(".span_initial").innerText = resp.data.nome.charAt(0).toUpperCase()
		document.querySelector(".span_email").innerText = resp.data.email
		let tmp_date = resp.data.data.split(" ")[0]
		tmp_date = tmp_date.split("-")
		document.querySelector(".span_data").innerText = tmp_date[2] + "/" + tmp_date[1] + "/" + tmp_date[0]
		document.querySelector(".span_hp").innerText = resp.data.hp + (resp.data.hp >= 5 && " Cheio")
		document.querySelector(".span_xp").innerText = resp.data.xp

		//document.querySelector(".total.xp span").innerText = resp.data.xp

		//alert(resp.data.hp)
	}
}

getData()
setInterval(()=>{
	getData()
}, 3000)