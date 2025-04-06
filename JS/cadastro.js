async function cadastro(){

  if(!validarCadastro())
    return false

  let formData = new FormData();
  formData.append("nome", nome.value);
  formData.append("email", email.value);
  formData.append("senha", senha.value);
  

  let obj = await fetch("../PHP/cadastro.php", {
    method: "POST",
    body: formData
  });

  let res = await obj.json();

  if(res.message)
    alert(res.message)
  else
 
    location.href = "../HTML/login.html"
}


function  validarCadastro() {
  let letras = /[aA-zZ]/;
  let numeros = /[0-9]/;
  let arroba = /[\@]/;
  let espaco = /[\ ]/;
  let simbolos = /[\\\!\"\#\£\$\§\%\&\/\(\{\[\)\]\=\}\?\'\«\»\´\`\+\¨\*\~\^\º\ª\_\,\;\:\>\<]/;

  if(nome.value == "" || email.value == "" || senha.value == ""){
    alert("Preencha todos os campos");
    return false;
  }
  else if(!letras.test(nome.value)){
    alert("O nome deve conter letras");
    return false;
  }
  else if(numeros.test(nome.value)){
    alert("O nome não deve conter números");
    return false;
  }
  else if(simbolos.test(nome.value) || arroba.test(nome.value)){
    alert("O nome não deve conter símbolos");
    return false;
  }
  else if(!arroba.test(email.value)){
    alert("O email deve conter o @");
    return false;
  }
  else if(espaco.test(email.value)){
    alert("O email não deve conter espaços");
    return false;
  }
  else if(!letras.test(email.value)){
    alert("O email deve conter letras");
    return false;
  }
  else if(senha.value.length < 6){
    alert("Senha muito curta | min: 6");
    return false;
  }
  else
    return true;
}

// Como estilizar alerts - Pesquisar