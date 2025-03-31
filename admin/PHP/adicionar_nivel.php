<?php

//$numero = $_POST["numero"];
include("conexao.php");

$fase = $_POST["fase"];
$xp = $_POST["xp"];

$mensagem = "";
$consulta = $conexao->prepare("SELECT COUNT(*) + 1 as numero from nivel WHERE id_fase = ?");
$consulta->execute([$fase]);
$res = $consulta->fetchAll(
	PDO::FETCH_ASSOC
);

if($res[0]["numero"] < 6){

$numero = $res[0]["numero"];
$consulta = $conexao->prepare("INSERT INTO nivel(numero, id_fase, xp) values(?, ?, ?)");

$consulta->execute([$numero, $fase, $xp]);
} else {
	$mensagem = "Número máximo de níveis atingido. Max: 5";
}

echo json_encode(["mensagem" => $mensagem]);
?>