<?php
include("conexao.php");
$aluno = $_GET['aluno'];

try {
    $stmt = $conn->prepare("SELECT hp FROM aluno WHERE id_aluno = ?");
    $stmt->execute([$aluno]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$user) {
        throw new Exception("Usuário não encontrado.");
    }

    $vidaAtual = (int)$user['hp'];
    $vidaMaxima = 5;

    if ($vidaAtual <= 0) {
        throw new Exception("Sem vidas para perder.");
    }

    if ($vidaAtual == $vidaMaxima) {
        // Estava cheio, agora vai para cheio - 1 → atualiza ultima_recarga
        $stmt = $conn->prepare("UPDATE aluno SET hp = hp - 1, ultima_recarga = NOW()
            WHERE id_aluno = ?");
    } else {
        // Não estava cheio → apenas reduz a vida
        $stmt = $conn->prepare("UPDATE aluno SET hp = hp - 1 
            WHERE id_aluno = ?");
    }

    $stmt->execute([$aluno]);

    echo json_encode(['sucesso' => true]);

} catch (Exception $e) {
    echo json_encode(['erro' => $e->getMessage()]);
}
?>