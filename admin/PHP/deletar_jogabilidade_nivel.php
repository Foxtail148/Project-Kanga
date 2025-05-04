<?php
include("conexao.php");

$id = $_POST["id"];

$mensagem = "";
$consulta = $conexao->prepare("DELETE from jogabilidade_nivel_palavra where id_jogabilidade_nivel = ?");
$consulta->execute([$id]);

$consulta = $conexao->prepare("DELETE from jogabilidade_nivel where id_jogabilidade_nivel = ?");
$consulta->execute([$id]);



echo json_encode(["mensagem"=>$mensagem]);