<?php

//$numero = $_POST["numero"];
include("conexao.php");

$id = $_POST["id"];
$palavras = explode(",", $_POST["palavras"]);



$mensagem = "";
$consulta = $conexao->prepare("DELETE from jogabilidade_nivel_palavra where id_jogabilidade_nivel = ?");
$consulta->execute([$id]);

for($i = 0; $i < sizeof($palavras); $i++){
	if($palavras[$i] != null && strcmp($palavras[$i], '') != 0){
		$consulta = $conexao->prepare("INSERT INTO jogabilidade_nivel_palavra(id_jogabilidade_nivel, id_palavra) values(?, ?)");
		$consulta->execute([$id, $palavras[$i]]);
	}
}


echo json_encode(["mensagem"=>$mensagem]);
?>