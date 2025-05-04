<?php
include("conexao.php");

$query = "%".$_GET["query"]."%";
$res = [];

if($query){
	$consulta = $conexao->prepare("SELECT * from palavra where palavra LIKE ? or significado LIKE ?");
	$consulta->execute([$query, $query]);

	$res = $consulta->fetchAll(
		PDO::FETCH_ASSOC
	);
} else {
	$consulta = $conexao->prepare("SELECT * from palavra");
	$consulta->execute();

	$res = $consulta->fetchAll(
		PDO::FETCH_ASSOC
	);
}


echo json_encode(["palavras" => $res]);
?>