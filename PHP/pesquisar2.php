<?php
require 'conexao.php';

$palavra_pesquisa = $_POST['palavra']; // Receber palavra do formulário

if (!isset($palavra_pesquisa) || empty(trim($palavra_pesquisa))) {
    // echo "<p>Digite uma palavra para pesquisar.</p>";
    exit;
}

$palavra_pesquisa = trim($_POST['palavra']);
$sql = "SELECT palavra,traducao FROM palavras WHERE palavra LIKE ?"; // "?" placeholder da palavra
$comando = $conn->prepare($sql);

$palavra_pesquisa = "%" . $palavra_pesquisa . "%";
$comando->bind_param("s", $palavra_pesquisa); // "s" significa que é uma string
$comando->execute();
$resultado = $comando->get_result();

if ($resultado->num_rows > 0) {
    echo "<ul>";
    while ($row = $resultado->fetch_assoc()) {
        echo "<li>" . htmlspecialchars($row["palavra"]) . " ----- ". htmlspecialchars($row["traducao"]). "</li>";
    }
    echo "</ul>";
} else {
    echo "<p>Nenhum resultado encontrado.</p>";
}

?>