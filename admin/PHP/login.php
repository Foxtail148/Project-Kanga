<?php
include("conexao.php");

$email = $_POST["email"];
$senha = md5($_POST['senha']);
$message = "";
$response = [];

$query = $conexao->prepare("SELECT email, senha from administrador where email = ? and senha = ?");
$query->execute([$email, $senha]);

$ver = $query->fetchAll(PDO::FETCH_ASSOC);


if($ver == array()){
  $message = "Dados inválidos";
}
else{
  $response = [
    "email" => $ver[0]["email"],
    "senha" => $ver[0]["senha"]
  ];
}

echo json_encode(["message" => $message, "data" => $response]);
?>