<?php
include("conexao.php");
date_default_timezone_set('Africa/Luanda');
$usuario_id = $_POST['aluno']; // Exemplo, depende do seu sistema

try {
    // 1. Buscar dados do usuário
    $stmt = $conn->prepare("SELECT hp, ultima_recarga FROM aluno WHERE id_aluno = ?");
    $stmt->execute([$usuario_id]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$user) {
        throw new Exception("Usuário não encontrado.");
    }

    $vidaAtual = (int)$user['hp'];
    $vidaMaxima = 5;
    $ultimaRecarga = strtotime($user['ultima_recarga']);
    $agora = time();

    // 2. Lógica de recarga de vida
    if ($vidaAtual < $vidaMaxima) {
        $segundosPassados = $agora - $ultimaRecarga;
        if ($segundosPassados >= 300) {
            $vidasParaRecarregar = floor($segundosPassados / 300);
            $vidasAdicionadas = min($vidasParaRecarregar, $vidaMaxima - $vidaAtual);
            $novaVida = $vidaAtual + $vidasAdicionadas;

           $novaUltimaRecarga = date('Y-m-d H:i:s', $agora - ($segundosPassados % 300));

            // Atualiza banco
            $update = $conn->prepare("UPDATE aluno SET hp = ?, ultima_recarga = ? WHERE id_aluno = ?");
            $update->execute([$novaVida, $novaUltimaRecarga, $usuario_id]);

            // Atualiza variáveis locais
            $vidaAtual = $novaVida;
            $ultimaRecarga = strtotime($novaUltimaRecarga);
        }
    }

    // 4. Calcular tempo restante para próxima vida
    $tempoRestante = max(0, 300 - ($agora - $ultimaRecarga)); // em segundos

    // 5. Retornar JSON
    echo json_encode([
        'vida_atual' => $vidaAtual,
        'vida_maxima' => $vidaMaxima,
        'tempo_restante' => $tempoRestante
    ]);

} catch (Exception $e) {
    echo json_encode(['erro' => $e->getMessage()]);
}
?>