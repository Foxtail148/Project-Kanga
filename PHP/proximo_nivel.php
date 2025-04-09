<?php
include("conexao.php");

$nivel = $_POST['nivel'];
$aluno = $_POST['aluno'];
$message = "";

try{
	$query = $conn->prepare("INSERT INTO aluno_nivel(estado, id_nivel, id_aluno) VALUES('completo', ?, ?)");
	$query->execute([$nivel, $aluno]);
	
	$query = $conn->prepare("SELECT nivel_actual, ((SELECT xp FROM nivel WHERE id_nivel = ?) / (SELECT COUNT(*) from aluno_nivel WHERE id_nivel = ? and id_aluno = ?)) as tmp_xp from aluno WHERE id_aluno = ?");
	$query->execute([$nivel, $nivel, $aluno, $aluno]);
	$rows = $query->fetchAll(
		PDO::FETCH_ASSOC
	);

	$tmp_xp = $rows[0]["tmp_xp"];

	if($rows[0]["nivel_actual"] == $nivel){
		$query = $conn->prepare("SELECT * from nivel where nivel.id_fase > 0 and (SELECT COUNT(*) as num_jog from jogabilidade_nivel WHERE id_nivel = nivel.id_nivel) > 0 order by id_fase, id_nivel");

		$query->execute();

		$rows = $query->fetchAll(
			PDO::FETCH_ASSOC
		);

		for($i = 0; $i < sizeof($rows); $i++){
			if($rows[$i]["id_nivel"] == $nivel){
				if($i < (sizeof($rows) - 1)){
					$query = $conn->prepare("UPDATE aluno set nivel_actual = ? where id_aluno = ?");
					$query->execute([$rows[$i + 1]["id_nivel"], $aluno]);
				}

				break;
			}
		}
	}
	
	$query = $conn->prepare("UPDATE aluno set xp = xp + ? where id_aluno = ?");
	$query->execute([$tmp_xp, $aluno]);
	
} catch (PDOException $e) {

}

echo json_encode(["message"=>$message]);
?>
