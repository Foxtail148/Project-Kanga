$(document).ready(function() {
    $('#formCadastro').submit(function(e) {
        e.preventDefault();
        var nome = $('#nome').val();
        var email = $('#email').val();
        var senha = $('#senha').val();

        // Enviar os dados via AJAX para o backend
        $.ajax({
            url: '../../back/php/cadastro.php',
            type: 'POST',
            data: {
                nome: nome,
                email: email,
                senha: senha
            },
            success: function(response) {
                if (response === 'sucesso') {
                    alert('Cadastro realizado com sucesso!');

                     // Limpar os campos após o cadastro bem-sucedido
                $('#nome').val('');
                $('#email').val('');
                $('#senha').val('');
                } else {
                    alert('Erro no cadastro: ' + response);
                }
            },
            error: function() {
                alert('Erro ao se conectar ao servidor.');
            }
        });
    });
});
document.getElementById("nome").addEventListener("input", function(){
    this.value = this.value.replace("/[^a-zA-ZÀ-y\s]/g","");
})
document.getElementById("email").addEventListener("input", function(){
    this.value = this.value.replace("/[a\@gmail]","");
})