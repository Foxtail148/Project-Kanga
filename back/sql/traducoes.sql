CREATE DATABASE kanga;
CREATE TABLE aluno(
  id_aluno int PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  senha VARCHAR(255) NOT NULL,
  data_de_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE administrador(
  id_administrador int PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL, --utilizamos o unique para que o email do usuário seja único
  senha VARCHAR(255) NOT NULL,
  data_de_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE palavras( 
  id_palavras INT AUTO_INCREMENT PRIMARY KEY, 
  palavra VARCHAR(100) NOT NULL, 
  categoria VARCHAR(50), -- Exemplo de categoria para a palavra (ex: substantivo, verbo, etc.
   significado TEXT, -- Significado da palavra, se necessário data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP ); `
data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);
CREATE TABLE palavras( 
  id_palavras INT AUTO_INCREMENT PRIMARY KEY, 
  palavra VARCHAR(100) NOT NULL, 
  categoria VARCHAR(50), -- Exemplo de categoria para a palavra (ex: substantivo, verbo, etc.
   significado TEXT, -- Significado da palavra, se necessário data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP ); `
data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);
CREATE TABLE exercicios ( 
  id_exercicios INT AUTO_INCREMENT PRIMARY KEY, 
  nome VARCHAR(100) NOT NULL, -- Nome do exercício ou desafio descricao TEXT, -- Descrição detalhada do exercício dificuldade ENUM('Fácil', 'Médio', 'Difícil') NOT NULL, -- Nível de dificuldade pontos INT NOT NULL, -- Pontos ou recompensa dada ao jogador ao completar o exercício tipo ENUM('Desafio', 'Questão', 'Atividade') NOT NULL, -- Tipo de exercício (por exemplo, desafio, questão ou atividade) status ENUM('Ativo', 'Inativo') DEFAULT 'Ativo', -- Estado do exercício (se está ativo ou inativo no jogo) data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Data de criação do exercício data_conclusao TIMESTAMP NULL -- Data em que o exercício foi concluído (se aplicável)

 ); 

CREATE TABLE exercicios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,       -- Nome do exercício ou desafio
    descricao TEXT,                   -- Descrição detalhada do exercício
    dificuldade ENUM('Fácil', 'Médio', 'Difícil') NOT NULL, -- Nível de dificuldade
    pontos INT NOT NULL,              -- Pontos ou recompensa dada ao jogador ao completar o exercício
    tipo ENUM('Desafio', 'Questão', 'Atividade') NOT NULL, -- Tipo de exercício (por exemplo, desafio, questão ou atividade)
    status ENUM('Ativo', 'Inativo') DEFAULT 'Ativo', -- Estado do exercício (se está ativo ou inativo no jogo)
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Data de criação do exercício
    data_conclusao TIMESTAMP NULL     -- Data em que o exercício foi concluído (se aplicável)
);

CREATE TABLE traducoes (
  id_ytraducao INT AUTO_INCREMENT PRIMARY KEY,
  id_palavras int NOT NULL,
  id_frases int NOT NULL,
  id_idioma int NOT NULL,
  chave VARCHAR(255) NOT NULL,
  idioma VARCHAR(10) NOT NULL,
  texto_traduzido TEXT NOT NULL
);

INSERT INTO traducao (chave, idioma, texto_traduzido) VALUES
('welcome_message', 'pt', 'Bem-vindo ao nosso site!'),
('welcome_message', 'en', 'Welcome to our website!'),
('greeting', 'pt', 'Olá! Como você está?'),
('greeting', 'en', 'Hello! How are you?');
('bom dia','km', 'lutomassala'

'lutomassala','pt','bom')