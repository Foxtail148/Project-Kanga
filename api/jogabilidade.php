<?php
include("conexao.php");

$nivel = $_POST['nivel'];
$message = "";
$response = [];
$jogs = [];

function getSignificado(){
	include("conexao.php");
	$query = $conn->prepare("SELECT palavra, significado from palavra");
	$query->execute();
	$ret = $query->fetchAll(PDO::FETCH_ASSOC);

	$palavra = $ret[random_int(0, sizeof($ret) - 1)];

	return $palavra;
}

function getAudio(){
	include("conexao.php");
	$query = $conn->prepare("SELECT palavra, audio from palavra");
	$query->execute();
	$ret = $query->fetchAll(PDO::FETCH_ASSOC);

	$palavra = $ret[random_int(0, sizeof($ret) - 1)];

	return $palavra;
}

function getPares(){
	include("conexao.php");
	$query = $conn->prepare("SELECT palavra, significado from palavra");
	$query->execute();
	$ret = $query->fetchAll(PDO::FETCH_ASSOC);
	$palavras = [];

	for($i = 0; $i < 4; $i++){
		$random = random_int(0, sizeof($ret) - 1);

		if($ret[$random] == Null){
			$i=$i-1;
		}else{
			$palavras[] = $ret[$random];
			$ret[$random] = Null;
		}
	}

	//$palavra = $ret[random_int(0, sizeof($ret) - 1)];
	//var_dump($ret);
	return $palavras;
}

try{
  $query = $conn->prepare("SELECT jogabilidade.tipo, jogabilidade_nivel.id_nivel FROM jogabilidade_nivel join jogabilidade where jogabilidade_nivel.id_jogabilidade = jogabilidade.id_jogabilidade and jogabilidade_nivel.id_nivel = ?");
  $query->execute([$nivel]);

  $ver = $query->fetchAll(
    PDO::FETCH_ASSOC
  );

  foreach ($ver as $jogabilidade) {
  	if(strcmp($jogabilidade["tipo"], "pares")){
  		$jogs[] = [
  			"tipo" => "pares",
  			"data" => getPares()
  		];
  	}
  	else if(strcmp($jogabilidade["tipo"], "áudio")){
  		$jogs[] = [
  			"tipo" => "áudio",
  			"data" => getAudio()
  		];
  	}
  	else if(strcmp($jogabilidade["tipo"], "significado")){
  	$jogs[] = [
  			"tipo" => "significado",
  			"data" => getSignificado()
  		];
  	}else{
  	}
  }

} catch (PDOException $e) {
  $message = "Erro na conexão";
}



//echo json_encode(["message" => $message, "data" => getSignificado()]);
//echo "<br>";
//echo json_encode(["message" => $message, "data" => getAudio()]);
//echo "<br>";
//echo json_encode(["message" => $message, "data" => getPares()]);
//echo "<br>";
echo json_encode(["message" => $message, "data" => $jogs]);
?>
?>