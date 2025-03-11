/*$(document).ready(function() {
    $('#formLogin').submit(function(e) {
        e.preventDefault();
        var email = $('#email').val();
        var senha = $('#senha').val();

        // Enviar os dados via AJAX para o backend
        $.ajax({
            url: '../../back/php/login.php',
            type: 'POST',
            data: {
                email: email,
                senha: senha
            },
            success: function(response) {
                if (response === 'sucesso') {
                    alert('Login realizado com sucesso!');
                    window.location.href = '../html/tradutor.html'; // Redirecionar para o painel

                } else {
                    alert('Erro no login: ' + response);

                    
                     // Limpar os campos após o cadastro bem-sucedido
                     $('#nome').val('');
                     $('#email').val('');
                     $('#senha').val('');
                }
            },
            error: function() {
                alert('Erro ao se conectar ao servidor.');
            }
        });
    });
});
function criarconta(){
    location.href="../html/cadastro.html";
}*/


async function login(){
  if(email.value == "" || senha.value == ""){
    alert("Preencha todos os campos");
    return false;
  }
  let formData = new FormData();
  //formData.append("nome", nome.value);
  formData.append("email", email.value);
  formData.append("senha", senha.value);

  let obj = await fetch("../api/login.php", {
    method: "POST",
    body: formData
  });

  let res = await obj.json();

  if(res.message)
    alert(res.message)
  else{
    localStorage.setItem("id", res.data.id);
    localStorage.setItem("senha", res.data.senha);
    localStorage.setItem("nome", res.data.nome);
    location.href = "../inicio";
  }
}
