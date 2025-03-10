$(document).ready(function() {
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
}