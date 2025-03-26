<?php
include("conexao.php");
$nivel = $_GET['nivel'];

$consulta = $conexao->prepare("SELECT jogabilidade.tipo, jogabilidade_nivel.id_jogabilidade_nivel from jogabilidade join jogabilidade_nivel where jogabilidade_nivel.id_jogabilidade=jogabilidade.id_jogabilidade and jogabilidade_nivel.id_nivel = ?");
$consulta->execute([$nivel]);

$res = $consulta->fetchAll(
	PDO::FETCH_ASSOC
);

$resposta = [];

for($i = 0; $i < sizeof($res); $i++){
	$consulta = $conexao->prepare("SELECT palavra from jogabilidade_nivel_palavra join palavra where jogabilidade_nivel_palavra.id_palavra = palavra.id_palavra and jogabilidade_nivel_palavra.id_jogabilidade_nivel = ?");
	$consulta->execute([$res[$i]["id_jogabilidade_nivel"]]);
	$ver = $consulta->fetchAll(
		PDO::FETCH_ASSOC
	);
	$resposta[] = [
		"tipo" => $res[$i]["tipo"],
		"palavras" => $ver
	];
}

echo json_encode(["jogabilidades" => $resposta]);
?>