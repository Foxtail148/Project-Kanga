<?php 
<?php
// Iniciando a sessão
session_start();

// Destruindo a sessão
session_destroy();

// Redirecionando para a página de login
header('Location: login.php');
exit();
?>



?>