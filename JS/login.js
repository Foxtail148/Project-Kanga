async function login(){
  if(email.value == "" || senha.value == ""){
    alert("Preencha todos os campos");
    return false;
  }
  let formData = new FormData();
  //formData.append("nome", nome.value);
  formData.append("email", email.value);
  formData.append("senha", senha.value);

  let obj = await fetch("../PHP/login.php", {
    method: "POST",
    body: formData
  });

  let res = await obj.json();

  if(res.message)
    alert(res.message)
  else{
    // alert("Funciona!"); 
    localStorage.setItem("id", res.data.id);
    localStorage.setItem("senha", res.data.senha);
    localStorage.setItem("nome", res.data.nome);
    location.href = "../HTML/interface.html";
  }
}
