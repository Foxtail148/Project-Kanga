<?php 
include("conexao.php");

$id = $_POST['id'];
$audio = $_FILES['audio'];
$palavra = $_POST['palavra'];
$significado = $_POST['significado'];
$categoria = $_POST['categoria'];
$ext = explode(".", $audio["name"])[1];
$caminho = "../AUDIO/$palavra.$ext";

$mensagem = "";

if(move_uploaded_file($audio["tmp_name"], $caminho)){
	$consulta = $conexao->prepare("UPDATE palavra set palavra = ?, significado = ?, audio = ?, categoria = ? WHERE id_palavra = ?");
	$consulta->execute([$palavra, $significado, "$palavra.$ext", $categoria, $id]);
} else {
	$mensagem = "Falha no upload do ficheiro";
}

echo json_encode(["mensagem"=> $mensagem]);

?>