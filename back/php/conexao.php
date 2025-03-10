<?php
$host = 'localhost';
$dbname = 'kanga';
$username = 'root';  // Substitua pelo seu usuário de banco de dados
$password = '';   

//Conexão
$conn = new mysqli($host, $username, $password, $dbname);

//Erro conexão
if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
} else {
    // echo "Conexão bem-sucedida!";
}
?>
