<?php
include("conexao.php");

$option = $_POST["option"];
$aluno = $_POST["id_aluno"];
$hp = $option == 1 ? 1 : ($option == 2 ? 3 : ($option == 3 ? 5 : 0));
$xp = $option == 1 ? 10 : ($option == 2 ? 20 : ($option == 3 ? 30 : 0));
$message = "";

$query = $conn->prepare("SELECT hp, xp from aluno WHERE id_aluno = ?");
$query->execute([$aluno]);
$res = $query->fetchAll(PDO::FETCH_ASSOC);

$actual_xp = $res[0]["xp"];
$actual_hp = $res[0]["hp"];

if($xp > $actual_xp)
	$message = "XP insuficiente";
elseif($actual_hp == 5)
	$message = "HP cheio";
elseif(($hp + $actual_hp) > 5)
	$message = "Demasiado HP";
else{
	$query = $conn->prepare("UPDATE aluno set hp = hp + ?, xp = xp - ? where id_aluno = ?");
	$query->execute([$hp, $xp, $aluno]);
}

echo json_encode(["message"=>$message]);


?>