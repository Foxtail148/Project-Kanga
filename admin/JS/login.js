async function login(){
	if(email.value == "" || senha.value == ""){
    	alert("Preencha todos os campos");
    	return false;
  	}
  	
	let formdata = new FormData();

	formdata.append("email", email.value)
	formdata.append("senha", senha.value)

	let obj = await fetch("../PHP/login.php", {
		method: "POST",
		body: formdata
	})

	let res = await obj.json()

	if(res.message) alert(res.message);
	else {
		localStorage.setItem("kanga_admin_email", res.data.email)
		localStorage.setItem("kanga_admin_senha", res.data.senha)

		//alert("Deu")
		location.href = "../HTML/admin1.html"
	}
}

function logout(){
	localStorage.removeItem("kanga_admin_email")
	localStorage.removeItem("kanga_admin_senha")
	document.body.innerHTML = ""
	location.href = "../HTML/loginAdmin.html"
}