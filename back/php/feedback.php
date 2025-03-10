<?php
header('Content-Type:application/json');
//conexao banco
$host ='localhost';
$dbname ='feedback';
$user = 'root';
$pass = '';

$conn = new PDO("mysql:host=$host;dbname=$dbname",$user,$pass);
$conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

// insercçao do feedback
if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $data = json_decode(file_get_contents('php://input'),true);
    
    if(!empty($data['usuario']) && ! empty($data['mensagem'])){
        $stmt = $conn->prepare("INSERT INTO feedback (usuario,mensagem) VALUES(:usuario, :mensagem)");
        $stmt->bindParam(':usuario',$data['usuario']);
        $stmt->bindParam(':mensagem',$data['mensagem']);
        $stmt->execute();

       echo json_encode(['status' => 'success','message' => 'Feedback enviado com sucesso!']); 

    }
    else{
    echo json_encode(['status'=>'error','message'=>'Todos os campos são obrigatórios']);
}
}
// listando os feedbacks
if($_SERVER['REQUEST_METHOD'] === 'GET'){
    $stmt = $conn->query("SELECT * FROM feedback ORDER BY  data_de_envio DESC");
    echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
}
?>