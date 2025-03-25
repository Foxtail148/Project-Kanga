<?php
include("conexao.php");
$fase = $_GET['fase'];
$consulta = $conexao->prepare("SELECT id_nivel, numero, (SELECT COUNT(*) from jogabilidade_nivel WHERE jogabilidade_nivel.id_nivel=nivel.id_nivel) as total_jog from nivel WHERE id_fase = ?");
$consulta->execute([$fase]);

$res = $consulta->fetchAll(
	PDO::FETCH_ASSOC
);

echo json_encode(["niveis" => $res]);
?>