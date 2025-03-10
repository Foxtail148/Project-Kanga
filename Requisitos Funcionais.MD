Remote IP Dom "192.168.0.1"

CREATE USER 'usuario_host'@'%' IDENTIFIED BY 'kanga_kb'; 
GRANT ALL PRIVILEGES ON *.* TO 'usuario_host'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES; 

E fazendo isso me levou a :

Mensagem do MySQL: Documentação

Não pode conectar: configurações inválidas.
 mysqli::real_connect(): (HY000/2002): Nenhuma ligação pôde ser feita porque o computador de destino as recusou ativamente
 A conexão para o controle do usuário, como definida nas configurações, falhou.
 mysqli::real_connect(): (HY000/2002): Nenhuma ligação pôde ser feita porque o computador de destino as recusou ativamente
 O phpMyAdmin tentou se conectar ao servidor MySQL e a conxão foi recusada. Você deve checar o servidor, nome de usuário e senha no config.inc.php e se certificar que correspondam com as informações fornecidas pelo administrador do servidor MySQL.

 Vamos usar o SQLite3, para ver no que dará
 