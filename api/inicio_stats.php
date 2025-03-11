<?php
$id_aluno = $_POST['id_aluno'];
$message = "";
$response = [];


try{
  $query = $conn->prepare("SELECT nivel.id_nivel, nivel.numero, nivel.xp, (SELECT estado from aluno_nivel where aluno_nivel.id_nivel = nivel.id_nivel and aluno_nivel.id_aluno = ?) as estado, (SELECT nivel_actual from aluno WHERE aluno.id_aluno = ?) as nivel_actual FROM nivel");
  $query->execute([$id_aluno, $id_aluno]);

  $ver = $query->fetchAll(
    PDO::FETCH_ASSOC
  );

  $response = $ver;

} catch (PDOException $e) {
  $message = "Erro na conexão";
}



echo json_encode(["message" => $message, "data" => $response]);
?>
?>