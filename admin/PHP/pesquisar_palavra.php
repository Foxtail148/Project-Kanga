<?php
include("conexao.php");
$palavra = "%".$_GET["palavra"]."%";
$consulta = $conexao->prepare("SELECT * FROM `palavra` where palavra like ?");
$consulta->execute([$palavra]);

$res = $consulta->fetchAll(
	PDO::FETCH_ASSOC
);
$resposta = "";
if(sizeof($res) > 0){
	$resposta = $res[0];
}
echo json_encode(["palavra" => $resposta]);
?>