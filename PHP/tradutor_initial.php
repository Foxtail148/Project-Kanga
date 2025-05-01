<?php
include("conexao.php");
$id_aluno = $_POST['id_aluno'];
$message = "";
$response = [];

try {
  $query = $conn->prepare("SELECT nivel_actual from aluno WHERE id_aluno = ?");
  $query->execute([$id_aluno]);
  $res = $query->fetchAll(PDO::FETCH_ASSOC);
  $id_nivel = $res[0]["nivel_actual"];
  
  $query = $conn->prepare("SELECT palavra, significado, audio from palavra where (SELECT COUNT(*) from jogabilidade_nivel_palavra join jogabilidade_nivel where jogabilidade_nivel_palavra.id_jogabilidade_nivel = jogabilidade_nivel.id_jogabilidade_nivel and jogabilidade_nivel_palavra.id_palavra = palavra.id_palavra and jogabilidade_nivel.id_nivel = ?) > 0 ");
  $query->execute([$id_nivel]);
  
  $res = $query->fetchAll(
    PDO::FETCH_ASSOC
  );

  $response = $res;
} catch (PDOException $e) {
  $message = "Erro na conexão"; 
}

echo json_encode(["message" => $message, "data" => $response]);
?>
