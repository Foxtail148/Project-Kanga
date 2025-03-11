<?php
$host = 'localhost';
$dbname = 'kanga';
$username = 'root';  // Substitua pelo seu usuário de banco de dados
$password = '';   

//Conexão
$conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);

//Erro conexão
/*if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
} else {
    // echo "Conexão bem-sucedida!";
}*/
?>
