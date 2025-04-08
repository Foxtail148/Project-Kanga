<?php
include("conexao.php");
$aluno = $_GET['aluno'];


try{
	$query = $conn->prepare("UPDATE aluno set hp = hp - 1 WHERE id_aluno = ?");
	$query->execute([$aluno]);
} catch(PDOException $e) {

}

?>