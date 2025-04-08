<?php
include("conexao.php");

$nivel = $_POST['nivel'];
$aluno = $_POST['aluno'];
$message = "";
$response = [];
$jogs = [];
$hp = 0;

function getSignificado(){
	include("conexao.php");
	$query = $conn->prepare("SELECT palavra, significado from palavra");
	$query->execute();
	$ret = $query->fetchAll(PDO::FETCH_ASSOC);

	$palavras = [];

	for($i = 0; $i < 3; $i++){
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

function getAudio(){
	include("conexao.php");
	$query = $conn->prepare("SELECT palavra, audio from palavra");
	$query->execute();
	$ret = $query->fetchAll(PDO::FETCH_ASSOC);

	$palavras = [];

	for($i = 0; $i < 3; $i++){
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

function getPalavras($id_jogn){
	include("conexao.php");
	$query = $conn->prepare("SELECT palavra, significado, audio from palavra join jogabilidade_nivel_palavra where jogabilidade_nivel_palavra.id_palavra = palavra.id_palavra and jogabilidade_nivel_palavra.id_jogabilidade_nivel = ?");
	$query->execute([$id_jogn]);

	$ret = $query->fetchAll(PDO::FETCH_ASSOC);
	$palavras = $ret;

	return $palavras;
}

try{
  $query = $conn->prepare("SELECT jogabilidade.tipo, jogabilidade_nivel.id_jogabilidade_nivel FROM jogabilidade_nivel join jogabilidade where jogabilidade_nivel.id_jogabilidade = jogabilidade.id_jogabilidade and jogabilidade_nivel.id_nivel = ?");

  $query->execute([$nivel]);

  $ver = $query->fetchAll(
    PDO::FETCH_ASSOC
  );

  for($i = 0; $i < sizeof($ver); $i++) {
  	$jogabilidade = $ver[$i];
  	$jogs[] = [
  		"tipo" => $jogabilidade["tipo"],
  		"palavras" => getPalavras($jogabilidade["id_jogabilidade_nivel"])
  	];
  	/*if(strcmp($jogabilidade["tipo"], "pares")==0){
  		$jogs[] = [
  			"tipo" => "pares",
  			"data" => getPares()
  		];
  	}
  	if(strcmp($jogabilidade["tipo"], "áudio")==0){
  		$jogs[] = [
  			"tipo" => "áudio",
  			"data" => getAudio()
  		];
  	}
  	if(strcmp($jogabilidade["tipo"], "significado")==0){
  	$jogs[] = [
  			"tipo" => "significado",
  			"data" => getSignificado()
  		];
  	}*/

  }
  
  $query = $conn->prepare("SELECT hp from aluno WHERE id_aluno = ?");
  $query->execute([$aluno]);
  $rows = $query->fetchAll(
  	PDO::FETCH_ASSOC
  );
  $hp = $rows[0]["hp"];

} catch (PDOException $e) {
  $message = "Erro na conexão";
}



//echo json_encode(["message" => $message, "data" => getSignificado()]);
//echo "<br>";
//echo json_encode(["message" => $message, "data" => getAudio()]);
//echo "<br>";
//echo json_encode(["message" => $message, "data" => getPares()]);
// echo "<br>";
echo json_encode(["message" => $message, "data" => $jogs, "hp" => $hp]);
?>
