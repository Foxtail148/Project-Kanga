<?php
include("conexao.php");

$consulta = $conexao->prepare("SELECT * from palavra");
$consulta->execute();

$res = $consulta->fetchAll(
	PDO::FETCH_ASSOC
);

echo json_encode(["palavras" => $res]);
?>