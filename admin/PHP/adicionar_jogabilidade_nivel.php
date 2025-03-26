<?php

//$numero = $_POST["numero"];
include("conexao.php");

$tipo = $_POST["tipo"];
$nivel = $_POST["nivel"];
$palavras = explode(",", $_POST["palavras"]);



$mensagem = "";
$consulta = $conexao->prepare("INSERT INTO jogabilidade_nivel(id_jogabilidade, id_nivel) values((SELECT id_jogabilidade from jogabilidade where tipo = ?), ?)");
$consulta->execute([$tipo, $nivel]);


$consulta = $conexao->prepare("SELECT id_jogabilidade_nivel from jogabilidade_nivel where id_nivel = ? and (SELECT tipo from jogabilidade where jogabilidade.id_jogabilidade = jogabilidade_nivel.id_jogabilidade) = ? order by id_jogabilidade_nivel desc");
$consulta->execute([$nivel, $tipo]);

$res = $consulta->fetchAll(
	PDO::FETCH_ASSOC
);

$jog = $res[0]["id_jogabilidade_nivel"];

for($i = 0; $i < sizeof($palavras); $i++){
	if($palavras[$i] != null && strcmp($palavras[$i], '') != 0){
		$consulta = $conexao->prepare("INSERT INTO jogabilidade_nivel_palavra(id_jogabilidade_nivel, id_palavra) values(?, ?)");
		$consulta->execute([$jog, $palavras[$i]]);
	}
}


echo json_encode(["mensagem"=>$mensagem]);
?>