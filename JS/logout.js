function logout(){
  localStorage.removeItem("id");
  localStorage.removeItem("nome");
  localStorage.removeItem("senha");
    
  document.body.innerHTML = ""
  location.href = "../HTML/login.html";
}