<?php
require 'conexao.php';

$palavra_pesquisa = $_POST['palavra']; // Receber palavra do formulário

$sql = "SELECT * FROM palavras WHERE palavra LIKE ?"; // "?" é um placeholder para o valor

$comando = $conn->prepare($sql); //Prepara a consulta

$palavra_pesquisa = "%".$palavra_pesquisa."%";
$comando->bind_param("s", $palavra_pesquisa); // "s" significa que é uma string
$comando->execute();

$resultado = $comando->get_result();

if ($resultado->num_rows > 0) {
    while($row = $resultado->fetch_assoc()) {
        echo $row["palavra"]. "<br>"; //Esse "palavra" é o nome da coluna no banco de dados
    }
} else {
    echo "Desculpe. Não conhecemos essa palvra";
}

?>