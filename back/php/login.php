<?php
$host = 'localhost';
$dbname = 'kanga';
$username = 'root';  // Substitua pelo seu usuário de banco de dados
$password = '';      // Substitua pela sua senha do banco de dados

try {
    // Conexão ao banco de dados usando PDO
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        // Pegando os dados enviados via POST
        $email = $_POST['email'];
        $senha = $_POST['senha'];

        // Verificando se o email existe no banco de dados
        $stmt = $pdo->prepare("SELECT * FROM aluno WHERE email = ?");
        $stmt->execute([$email]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user && password_verify($senha, $user['senha'])) {
            echo 'sucesso';  // Login bem-sucedido
        } else {
            echo 'Credenciais incorretas.';
        }
    }
} catch (PDOException $e) {
    echo 'Erro: ' . $e->getMessage();
}
?>
