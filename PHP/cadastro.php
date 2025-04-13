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
    $query = $conn->prepare("SELECT * from nivel where nivel.id_fase > 0 and (SELECT COUNT(*) as num_jog from jogabilidade_nivel WHERE id_nivel = nivel.id_nivel) > 0 order by id_fase, id_nivel");
    $query->execute();

    $rows = $query->fetchAll(
      PDO::FETCH_ASSOC
    );

    $query = $conn->prepare("INSERT INTO aluno(nome, email, senha, nivel_actual) VALUES(?, ?, ?, ?)");
    $query->execute([$nome, $email, $senha, $rows[0]["id_nivel"]]);
  }
} catch (PDOException $e) {
  $response = "Erro na conexão";
}

echo json_encode(["message" => $response]);
?>
