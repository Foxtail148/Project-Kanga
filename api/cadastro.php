<?php
include("conexao.php");


/*try {
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
}*/
$nome = $_POST['nome'];
$email = $_POST['email'];
$senha = md5($_POST['senha']);
$response = "";
$existe = false;

try{
  $query = $conn->prepare("SELECT nome from aluno WHERE email=?");
  $query->execute([$email]);
  $ver = $query->fetchAll(
    PDO::FETCH_ASSOC
  );

  if($ver != array()){
    $existe = true;
    $response = "Email já registrado";
  }

} catch (PDOException $e) {
  $response = "Erro na conexão";
}

try{
  if(!($existe)){
    $query = $conn->prepare("INSERT INTO aluno(nome, email, senha) VALUES(?, ?, ?)");
    $query->execute([$nome, $email, $senha]);
  }
} catch (PDOException $e) {
  $response = "Erro na conexão";
}



echo json_encode(["message" => $response]);
?>
