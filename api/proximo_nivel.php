<?php
include("conexao.php");

$nivel = $_POST['nivel'];
$aluno = $_POST['aluno'];
$message = "";

try{
	$query = $conn->prepare("INSERT INTO aluno_nivel(estado, id_nivel, id_aluno) VALUES('completo', ?, ?)");
	$query->execute([$nivel, $aluno]);

	$query = $conn->prepare("UPDATE aluno set nivel_actual=nivel_actual+1 where id_aluno = ?");
	$query->execute([$aluno]);
} catch (PDOException $e) {

}
?>
