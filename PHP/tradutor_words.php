<?php
include("conexao.php");
$id_aluno = $_POST['id_aluno'];
$filtro = "%".$_POST["query"]."%";
$message = "";
$results = 0;
$response = [];

try {
  $query = $conn->prepare("SELECT nivel_actual from aluno WHERE id_aluno = ?");
  $query->execute([$id_aluno]);
  $res = $query->fetchAll(PDO::FETCH_ASSOC);
  $id_nivel = $res[0]["nivel_actual"];
  
  $query = $conn->prepare("SELECT palavra, significado, audio from palavra where (SELECT COUNT(*) from jogabilidade_nivel_palavra join jogabilidade_nivel where jogabilidade_nivel_palavra.id_jogabilidade_nivel = jogabilidade_nivel.id_jogabilidade_nivel and jogabilidade_nivel_palavra.id_palavra = palavra.id_palavra and (jogabilidade_nivel.id_nivel = ? or (SELECT COUNT(*) from aluno_nivel where aluno_nivel.id_aluno = ? and aluno_nivel.id_nivel = jogabilidade_nivel.id_nivel) > 0)) > 0 and (palavra LIKE ? or significado LIKE ?)");
  $query->execute([$id_nivel, $id_aluno, $filtro, $filtro]);
  
  $res = $query->fetchAll(
    PDO::FETCH_ASSOC
  );

  $response = $res;

  $query = $conn->prepare("SELECT COUNT(*) as results from palavra where palavra LIKE ? or significado LIKE ?");
  $query->execute([$filtro, $filtro]);
  $res = $query->fetchAll(
    PDO::FETCH_ASSOC
  );

  $results = $res[0]["results"];


} catch (PDOException $e) {
  $message = "Erro na conexão"; 
}

echo json_encode(["message" => $message, "data" => $response, "results" => $results]);
?>
