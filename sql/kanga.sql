-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 11-Mar-2025 às 09:37
-- Versão do servidor: 10.4.32-MariaDB
-- versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `kanga`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `administrador`
--

CREATE TABLE `administrador` (
  `id_administrador` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `data_de_cadastro` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `aluno`
--

CREATE TABLE `aluno` (
  `id_aluno` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `nivel_actual` int(11) NOT NULL DEFAULT 1,
  `xp` int(11) NOT NULL DEFAULT 0,
  `data_de_cadastro` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `aluno`
--

INSERT INTO `aluno` (`id_aluno`, `nome`, `email`, `senha`, `nivel_actual`, `xp`, `data_de_cadastro`) VALUES
(1, 'josé', 'exemplo@gmail.com', 'bruh', 1, 0, '2025-03-10 18:28:55'),
(2, 'adsds', 'ceutron7@gmail.com', '$2y$10$gUar6erXwFgMHDmqjJsOw.vuS8.AB5XMPAsEW67WPK5lBjJAHvIM2', 1, 0, '2025-03-10 18:51:05'),
(3, 'José', 'exemplo2@gmail.com', '$2y$10$gXxGEoSaZzt9Pu5AyxkbpueJz1SrlTaJ8u8oJjSB6j4xJnqZVoU4W', 1, 0, '2025-03-10 18:52:37'),
(7, 'dsadsd', 'ceutron@gmail.com', '$2y$10$ieYKNp5Go5nzn2.y3qXJ8.hRMbEGtAJpDND7psHGbT.RpFqsoTcyW', 1, 0, '2025-03-10 19:18:25'),
(8, 'josé de camargo', 'exemplo4@gmail.com', '$2y$10$LHtp/z7HA0uGpTg7WmbuAeca0grCnT.pB65GEKRGpOkdRFc7LPzjC', 1, 0, '2025-03-10 19:20:43'),
(11, 'josé de camargo', 'exemplo8@gmail.com', '$2y$10$WOC8pbxwLSKGRx93TQmgKuhf0Y93wWkw5nG45m0ZPrk5IRKeYO.nu', 1, 0, '2025-03-10 19:22:57'),
(14, 'Carlos Chagas', '434343@cacadxada', '$2y$10$0eO/2lPzGT4jZAeL3GP25OYZZotvCGuIprBUyV6KLUp/fHsYnWaiq', 1, 0, '2025-03-10 20:04:29'),
(17, 'dsadsd', 'ceutron10@gmail.com', '$2y$10$AcQrTOXnXONSltMdg/DpZ.ddlngbY.qyRaKf8zMR5L.JcB3ZHS7FO', 1, 0, '2025-03-10 20:31:11'),
(18, 'dsadsd', 'ceutron11@gmail.com', '$2y$10$YNYA/4Lpx1mUDyWRBdVe6.MtlJF5.wc5J8uigYuL4l6mTxeW9ABMW', 1, 0, '2025-03-10 20:31:49'),
(19, 'dsadsd', 'ceutron12@gmail.com', '$2y$10$RH0frWWiVRD1ZgGATv6rX.BbasLnOWiZeaQBtzWEwSU1zTaYCT9aK', 1, 0, '2025-03-10 20:33:12'),
(20, 'José Santos', 'jsantos7@gmail.com', '$2y$10$SPB6RaXt6aJIc5v2Ga6N0eqUbTprfKiaY4X3xQCERG5ReBMZGxdPO', 1, 0, '2025-03-10 21:17:20'),
(21, 'José Santos', 'jsantos8@gmail.com', '$2y$10$cylzlPINAX1fWs249oIisuyej3LcJhDakMFtRODhvcTJrvizeMAOy', 1, 0, '2025-03-10 21:19:43'),
(22, 'José Santos', 'jsantos9@gmail.com', 'e10adc3949ba59abbe56e057f20f883e', 1, 0, '2025-03-10 21:21:01'),
(23, 'cc', 'jsantos10@gmail.com', 'e10adc3949ba59abbe56e057f20f883e', 3, 0, '2025-03-11 01:50:12');

-- --------------------------------------------------------

--
-- Estrutura da tabela `aluno_nivel`
--

CREATE TABLE `aluno_nivel` (
  `id_aluno_nivel` int(11) NOT NULL,
  `estado` enum('completo','incompleto') DEFAULT NULL,
  `id_nivel` int(11) DEFAULT NULL,
  `id_aluno` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `aluno_nivel`
--

INSERT INTO `aluno_nivel` (`id_aluno_nivel`, `estado`, `id_nivel`, `id_aluno`) VALUES
(6, 'completo', 1, 23),
(7, 'completo', 2, 23);

-- --------------------------------------------------------

--
-- Estrutura da tabela `jogabilidade`
--

CREATE TABLE `jogabilidade` (
  `id_jogabilidade` int(11) NOT NULL,
  `tipo` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `jogabilidade`
--

INSERT INTO `jogabilidade` (`id_jogabilidade`, `tipo`) VALUES
(1, 'pares'),
(2, 'áudio'),
(3, 'significado');

-- --------------------------------------------------------

--
-- Estrutura da tabela `jogabilidade_nivel`
--

CREATE TABLE `jogabilidade_nivel` (
  `id_jogabilidade_nivel` int(11) NOT NULL,
  `id_jogabilidade` int(11) DEFAULT NULL,
  `id_nivel` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `jogabilidade_nivel`
--

INSERT INTO `jogabilidade_nivel` (`id_jogabilidade_nivel`, `id_jogabilidade`, `id_nivel`) VALUES
(1, 3, 1),
(2, 3, 1),
(3, 3, 1),
(4, 3, 2),
(5, 3, 2),
(6, 3, 2),
(7, 3, 3),
(8, 3, 3),
(9, 3, 3),
(10, 3, 3),
(11, 3, 4),
(12, 3, 4),
(13, 3, 5),
(14, 3, 5),
(15, 3, 5),
(16, 3, 5),
(17, 3, 5);

-- --------------------------------------------------------

--
-- Estrutura da tabela `nivel`
--

CREATE TABLE `nivel` (
  `id_nivel` int(11) NOT NULL,
  `numero` int(6) DEFAULT NULL,
  `dificuldade` enum('fácil','normal','difícil') DEFAULT NULL,
  `xp` int(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `nivel`
--

INSERT INTO `nivel` (`id_nivel`, `numero`, `dificuldade`, `xp`) VALUES
(1, 1, 'fácil', 50),
(2, 2, 'fácil', 50),
(3, 3, 'fácil', 50),
(4, 4, 'fácil', 50),
(5, 5, 'fácil', 70);

-- --------------------------------------------------------

--
-- Estrutura da tabela `palavra`
--

CREATE TABLE `palavra` (
  `id_palavra` int(11) NOT NULL,
  `palavra` varchar(100) NOT NULL,
  `categoria` varchar(50) DEFAULT NULL,
  `significado` text DEFAULT NULL,
  `audio` varchar(255) DEFAULT NULL,
  `data_criacao` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `palavra`
--

INSERT INTO `palavra` (`id_palavra`, `palavra`, `categoria`, `significado`, `audio`, `data_criacao`) VALUES
(1, 'Olá', NULL, 'Ayó', NULL, '2025-03-10 22:09:06'),
(2, 'Adeus', NULL, 'Kuahádia', NULL, '2025-03-10 22:09:55'),
(3, 'Vamos', NULL, 'Twende', NULL, '2025-03-10 22:10:41'),
(4, 'Desculpa', NULL, 'Nguilaloke', NULL, '2025-03-10 22:12:23'),
(5, 'Entendi', NULL, 'Ngakive', NULL, '2025-03-10 22:13:01'),
(6, 'Trabalho', NULL, 'Ukalalu', NULL, '2025-03-10 22:13:58'),
(7, 'Música', NULL, 'Muimbu', NULL, '2025-03-10 22:15:13'),
(8, 'Dia', NULL, 'Kizua', NULL, '2025-03-10 22:16:30'),
(9, 'Noite', NULL, 'Ussuku', NULL, '2025-03-10 22:17:06'),
(10, 'Amigo', NULL, 'Dikamba', NULL, '2025-03-10 22:17:57'),
(11, 'Fámilia', NULL, 'Divumu', NULL, '2025-03-10 22:18:29'),
(12, 'Pai', NULL, 'Tata', NULL, '2025-03-10 22:19:35'),
(13, 'Mãe', NULL, 'Mama', NULL, '2025-03-10 22:19:56'),
(14, 'Pessoa', NULL, 'Muthu', NULL, '2025-03-10 22:20:25'),
(15, 'Gente', NULL, 'Mundu', NULL, '2025-03-10 22:20:42');

-- --------------------------------------------------------

--
-- Estrutura da tabela `traducao`
--

CREATE TABLE `traducao` (
  `id_traducao` int(11) NOT NULL,
  `id_palavras` int(11) NOT NULL,
  `id_frases` int(11) NOT NULL,
  `id_idioma` int(11) NOT NULL,
  `chave` varchar(255) NOT NULL,
  `idioma` varchar(10) NOT NULL,
  `texto_traduzido` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `administrador`
--
ALTER TABLE `administrador`
  ADD PRIMARY KEY (`id_administrador`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Índices para tabela `aluno`
--
ALTER TABLE `aluno`
  ADD PRIMARY KEY (`id_aluno`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Índices para tabela `aluno_nivel`
--
ALTER TABLE `aluno_nivel`
  ADD PRIMARY KEY (`id_aluno_nivel`);

--
-- Índices para tabela `jogabilidade`
--
ALTER TABLE `jogabilidade`
  ADD PRIMARY KEY (`id_jogabilidade`);

--
-- Índices para tabela `jogabilidade_nivel`
--
ALTER TABLE `jogabilidade_nivel`
  ADD PRIMARY KEY (`id_jogabilidade_nivel`);

--
-- Índices para tabela `nivel`
--
ALTER TABLE `nivel`
  ADD PRIMARY KEY (`id_nivel`);

--
-- Índices para tabela `palavra`
--
ALTER TABLE `palavra`
  ADD PRIMARY KEY (`id_palavra`);

--
-- Índices para tabela `traducao`
--
ALTER TABLE `traducao`
  ADD PRIMARY KEY (`id_traducao`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `administrador`
--
ALTER TABLE `administrador`
  MODIFY `id_administrador` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `aluno`
--
ALTER TABLE `aluno`
  MODIFY `id_aluno` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de tabela `aluno_nivel`
--
ALTER TABLE `aluno_nivel`
  MODIFY `id_aluno_nivel` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de tabela `jogabilidade`
--
ALTER TABLE `jogabilidade`
  MODIFY `id_jogabilidade` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `jogabilidade_nivel`
--
ALTER TABLE `jogabilidade_nivel`
  MODIFY `id_jogabilidade_nivel` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de tabela `nivel`
--
ALTER TABLE `nivel`
  MODIFY `id_nivel` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `palavra`
--
ALTER TABLE `palavra`
  MODIFY `id_palavra` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de tabela `traducao`
--
ALTER TABLE `traducao`
  MODIFY `id_traducao` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
