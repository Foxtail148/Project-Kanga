<?php
require 'conexao.php';
$host = 'localhost';
$dbname = 'kanga';
$username = 'root';  // Substitua pelo seu usuário de banco de dados
$password = '';      // Substitua pela sua senha do banco de dados

// 

try {
    // Conexão ao banco de dados usando PDO
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Verificando se o formulário foi enviado via AJAX
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        // Pegando os dados enviados via POST
        $nome = $_POST['nome'];
        $email = $_POST['email'];
        $senha = password_hash($_POST['senha'], PASSWORD_DEFAULT);  // Criptografando a senha

        // Verificando se o email já está cadastrado
        $stmt = $pdo->prepare("SELECT * FROM aluno WHERE email = ?");
        $stmt->execute([$email]);

        if ($stmt->rowCount() > 0) {
            echo 'Email já cadastrado.';
        } else {
            // Inserindo o novo usuário no banco de dados
            $stmt = $pdo->prepare("INSERT INTO aluno (nome, email, senha) VALUES (?, ?, ?)");
            $stmt->execute([$nome, $email, $senha]);

            echo 'sucesso';
        }
    }
} catch (PDOException $e) {
    echo 'Erro: ' . $e->getMessage();
}
?>
