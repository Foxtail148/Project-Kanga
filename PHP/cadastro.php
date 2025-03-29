<?php
include("conexao.php");

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
