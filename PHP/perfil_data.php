<?php
include("conexao.php");
$id_aluno = $_POST['id_aluno'];

$message = "";
$response = [];

try {
  $query = $conn->prepare("SELECT hp, xp, nome, email, data_de_cadastro as data from aluno WHERE id_aluno = ?");
  $query->execute([$id_aluno]);
  
  $res = $query->fetchAll(
    PDO::FETCH_ASSOC
  );

  $response = $res[0];
} catch (PDOException $e) {
  $message = "Erro na conexão"; 
}

echo json_encode(["message" => $message, "data" => $response]);
?>