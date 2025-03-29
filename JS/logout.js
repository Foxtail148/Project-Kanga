function logout(){
  localStorage.removeItem("id");
  localStorage.removeItem("nome");
  localStorage.removeItem("senha");
    
  location.href = "../HTML/login.html";
}