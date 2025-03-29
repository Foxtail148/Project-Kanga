<?php
include("conexao.php");

//$nome = $_POST['nome'];
$email = $_POST['email'];
$senha = md5($_POST['senha']);
$message = "";
$response = [];


try{
  $query = $conn->prepare("SELECT nome, id_aluno, senha from aluno WHERE email=? and senha=?");
  $query->execute([$email, $senha]);

  $ver = $query->fetchAll(
    PDO::FETCH_ASSOC
  );

  if($ver == array()){
    $message = "Dados inválidos";
  }
  else{
    $response = [
      "id" => $ver[0]["id_aluno"],
      "nome" => $ver[0]["nome"],
      "senha" => $ver[0]["senha"]
    ];
  }

} catch (PDOException $e) {
  $message = "Erro na conexão";
}



echo json_encode(["message" => $message, "data" => $response]);
?>
