-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 05-Maio-2025 às 06:50
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
  `hp` int(1) NOT NULL DEFAULT 5,
  `xp` int(11) NOT NULL DEFAULT 0,
  `ultima_recarga` datetime NOT NULL DEFAULT current_timestamp(),
  `data_de_cadastro` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `aluno`
--

INSERT INTO `aluno` (`id_aluno`, `nome`, `email`, `senha`, `nivel_actual`, `hp`, `xp`, `ultima_recarga`, `data_de_cadastro`) VALUES
(1, 'josé', 'exemplo@gmail.com', 'bruh', 8, 5, 0, '2025-05-02 18:01:07', '2025-03-10 18:28:55'),
(2, 'adsds', 'ceutron7@gmail.com', '$2y$10$gUar6erXwFgMHDmqjJsOw.vuS8.AB5XMPAsEW67WPK5lBjJAHvIM2', 8, 5, 0, '2025-05-02 18:01:07', '2025-03-10 18:51:05'),
(3, 'José', 'exemplo2@gmail.com', '$2y$10$gXxGEoSaZzt9Pu5AyxkbpueJz1SrlTaJ8u8oJjSB6j4xJnqZVoU4W', 8, 5, 0, '2025-05-02 18:01:07', '2025-03-10 18:52:37'),
(7, 'dsadsd', 'ceutron@gmail.com', '$2y$10$ieYKNp5Go5nzn2.y3qXJ8.hRMbEGtAJpDND7psHGbT.RpFqsoTcyW', 9, 0, 25, '2025-05-02 18:01:07', '2025-03-10 19:18:25'),
(8, 'josé de camargo', 'exemplo4@gmail.com', '$2y$10$LHtp/z7HA0uGpTg7WmbuAeca0grCnT.pB65GEKRGpOkdRFc7LPzjC', 8, 5, 0, '2025-05-02 18:01:07', '2025-03-10 19:20:43'),
(11, 'josé de camargo', 'exemplo8@gmail.com', '$2y$10$WOC8pbxwLSKGRx93TQmgKuhf0Y93wWkw5nG45m0ZPrk5IRKeYO.nu', 8, 5, 0, '2025-05-02 18:01:07', '2025-03-10 19:22:57'),
(14, 'Carlos Chagas', '434343@cacadxada', '$2y$10$0eO/2lPzGT4jZAeL3GP25OYZZotvCGuIprBUyV6KLUp/fHsYnWaiq', 8, 5, 0, '2025-05-02 18:01:07', '2025-03-10 20:04:29'),
(17, 'dsadsd', 'ceutron10@gmail.com', '$2y$10$AcQrTOXnXONSltMdg/DpZ.ddlngbY.qyRaKf8zMR5L.JcB3ZHS7FO', 8, 5, 0, '2025-05-02 18:01:07', '2025-03-10 20:31:11'),
(18, 'dsadsd', 'ceutron11@gmail.com', '$2y$10$YNYA/4Lpx1mUDyWRBdVe6.MtlJF5.wc5J8uigYuL4l6mTxeW9ABMW', 8, 5, 0, '2025-05-02 18:01:07', '2025-03-10 20:31:49'),
(19, 'dsadsd', 'ceutron12@gmail.com', '$2y$10$RH0frWWiVRD1ZgGATv6rX.BbasLnOWiZeaQBtzWEwSU1zTaYCT9aK', 8, 5, 0, '2025-05-02 18:01:07', '2025-03-10 20:33:12'),
(20, 'José Santos', 'jsantos7@gmail.com', '$2y$10$SPB6RaXt6aJIc5v2Ga6N0eqUbTprfKiaY4X3xQCERG5ReBMZGxdPO', 8, 5, 0, '2025-05-02 18:01:07', '2025-03-10 21:17:20'),
(21, 'José Santos', 'jsantos8@gmail.com', '$2y$10$cylzlPINAX1fWs249oIisuyej3LcJhDakMFtRODhvcTJrvizeMAOy', 8, 5, 0, '2025-05-02 18:01:07', '2025-03-10 21:19:43'),
(22, 'José Santos', 'jsantos9@gmail.com', 'e10adc3949ba59abbe56e057f20f883e', 12, 0, 33, '2025-05-05 05:48:03', '2025-03-10 21:21:01'),
(23, 'cc', 'jsantos10@gmail.com', 'e10adc3949ba59abbe56e057f20f883e', 10, 5, 80, '2025-05-04 01:36:05', '2025-03-11 01:50:12'),
(24, 'JJ', 'ceutronmil@gmail.com', 'e10adc3949ba59abbe56e057f20f883e', 8, 4, 0, '2025-05-02 18:01:07', '2025-04-09 22:22:26'),
(25, 'JJ', 'ceutron2mil@gmail.com', 'e10adc3949ba59abbe56e057f20f883e', 9, 0, 38, '2025-05-02 18:01:07', '2025-04-09 22:23:50'),
(26, 'JJ', 'ceutron3mil@gmail.com', 'e10adc3949ba59abbe56e057f20f883e', 27, 5, 5297, '2025-05-04 17:35:09', '2025-04-09 22:24:23'),
(27, 'JJ', 'ceutron4mil@gmail.com', 'e10adc3949ba59abbe56e057f20f883e', 9, 3, 25, '2025-05-02 18:01:07', '2025-04-09 22:25:17'),
(28, 'J', 'ceutron5mil@gmail.com', 'e10adc3949ba59abbe56e057f20f883e', 10, 1, 160, '2025-05-02 18:01:07', '2025-04-09 22:34:25'),
(29, 'Carlos Chagas', 'cc@gmail.com', 'e10adc3949ba59abbe56e057f20f883e', 9, 1, 25, '2025-05-02 18:01:07', '2025-05-01 18:15:22'),
(30, 'Alberto José', 'aj@gmail.com', 'e10adc3949ba59abbe56e057f20f883e', 9, 0, 5, '2025-05-04 11:00:44', '2025-05-04 00:39:02');

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
(12, 'completo', 8, 22),
(13, 'completo', 8, 22),
(14, 'completo', 9, 22),
(15, 'completo', 9, 22),
(16, 'completo', 10, 22),
(17, 'completo', 8, 28),
(18, 'completo', 9, 28),
(19, 'completo', 10, 28),
(20, 'completo', 9, 28),
(21, 'completo', 10, 28),
(22, 'completo', 8, 27),
(23, 'completo', 8, 7),
(24, 'completo', 8, 25),
(25, 'completo', 8, 25),
(26, 'completo', 10, 28),
(27, 'completo', 8, 29),
(28, 'completo', 8, 26),
(29, 'completo', 8, 23),
(30, 'completo', 9, 23),
(31, 'completo', 9, 23),
(32, 'completo', 10, 23),
(33, 'completo', 10, 23),
(34, 'completo', 10, 23),
(35, 'completo', 10, 23),
(36, 'completo', 10, 23),
(37, 'completo', 8, 30),
(38, 'completo', 9, 26),
(39, 'completo', 10, 26),
(41, 'completo', 10, 26),
(43, 'completo', 10, 26),
(44, 'completo', 11, 26),
(45, 'completo', 12, 26),
(46, 'completo', 13, 26),
(47, 'completo', 14, 26),
(48, 'completo', 15, 26),
(49, 'completo', 15, 26),
(50, 'completo', 16, 26),
(51, 'completo', 17, 26),
(52, 'completo', 18, 26),
(53, 'completo', 19, 26),
(54, 'completo', 20, 26),
(55, 'completo', 21, 26),
(56, 'completo', 22, 26),
(57, 'completo', 23, 26),
(58, 'completo', 24, 26),
(59, 'completo', 25, 26),
(60, 'completo', 26, 26),
(61, 'completo', 27, 26),
(62, 'completo', 27, 26),
(64, 'completo', 10, 22),
(65, 'completo', 11, 22);

-- --------------------------------------------------------

--
-- Estrutura da tabela `fase`
--

CREATE TABLE `fase` (
  `id_fase` int(11) NOT NULL,
  `numero` int(11) DEFAULT NULL,
  `cor` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `fase`
--

INSERT INTO `fase` (`id_fase`, `numero`, `cor`) VALUES
(1, 1, '#0000FF'),
(2, 2, '#FF0000'),
(3, 3, '#00FF00'),
(4, 4, '#dddddd');

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
(3, 'significado'),
(4, 'frase');

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
(7, 3, 8),
(8, 3, 8),
(9, 3, 8),
(10, 3, 8),
(11, 3, 8),
(12, 1, 8),
(13, 2, 8),
(14, 2, 8),
(17, 3, 9),
(18, 1, 9),
(19, 2, 9),
(20, 3, 10),
(21, 1, 10),
(22, 1, 10),
(28, 1, 13),
(29, 3, 11),
(30, 3, 12),
(31, 1, 14),
(32, 3, 15),
(33, 2, 16),
(34, 1, 17),
(35, 3, 18),
(36, 3, 18),
(37, 3, 19),
(38, 1, 20),
(39, 3, 21),
(40, 3, 22),
(41, 3, 23),
(42, 3, 24),
(43, 3, 25),
(44, 3, 26),
(45, 3, 27),
(47, 1, 11),
(48, 3, 11),
(49, 4, 11),
(50, 3, 11);

-- --------------------------------------------------------

--
-- Estrutura da tabela `jogabilidade_nivel_palavra`
--

CREATE TABLE `jogabilidade_nivel_palavra` (
  `id_jogabilidade_nivel_palavra` int(11) NOT NULL,
  `id_palavra` int(11) DEFAULT NULL,
  `id_jogabilidade_nivel` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `jogabilidade_nivel_palavra`
--

INSERT INTO `jogabilidade_nivel_palavra` (`id_jogabilidade_nivel_palavra`, `id_palavra`, `id_jogabilidade_nivel`) VALUES
(1, 1, 7),
(2, 2, 7),
(3, 9, 7),
(4, 1, 8),
(5, 2, 8),
(6, 9, 8),
(7, 1, 9),
(8, 8, 9),
(9, 9, 9),
(10, 1, 10),
(11, 8, 10),
(12, 9, 10),
(13, 22, 11),
(14, 21, 11),
(15, 1, 11),
(16, 9, 12),
(17, 8, 12),
(18, 1, 12),
(19, 2, 12),
(20, 1, 13),
(21, 8, 13),
(22, 9, 13),
(23, 22, 14),
(24, 6, 14),
(25, 21, 14),
(32, 22, 17),
(33, 21, 17),
(34, 10, 17),
(35, 22, 18),
(36, 3, 18),
(37, 10, 18),
(38, 21, 18),
(39, 22, 19),
(40, 10, 19),
(41, 21, 19),
(49, 10, 22),
(50, 11, 22),
(51, 8, 22),
(52, 9, 22),
(73, 1, 21),
(74, 21, 21),
(75, 10, 21),
(76, 11, 21),
(97, 11, 20),
(98, 21, 20),
(99, 22, 20),
(100, 1, 28),
(101, 10, 28),
(102, 22, 28),
(103, 23, 28),
(107, 1, 30),
(108, 9, 30),
(109, 8, 30),
(110, 2, 31),
(111, 1, 31),
(112, 9, 31),
(113, 8, 31),
(114, 12, 32),
(115, 13, 32),
(116, 11, 32),
(117, 13, 33),
(118, 12, 33),
(119, 11, 33),
(120, 1, 34),
(121, 2, 34),
(122, 9, 34),
(123, 8, 34),
(124, 11, 35),
(125, 10, 35),
(126, 22, 35),
(127, 1, 36),
(128, 11, 36),
(129, 2, 36),
(130, 11, 37),
(131, 1, 37),
(132, 3, 37),
(133, 1, 38),
(134, 2, 38),
(135, 9, 38),
(136, 8, 38),
(137, 1, 39),
(138, 10, 39),
(139, 11, 39),
(140, 11, 40),
(141, 10, 40),
(142, 22, 40),
(143, 1, 41),
(144, 10, 41),
(145, 22, 41),
(146, 11, 42),
(147, 10, 42),
(148, 22, 42),
(149, 11, 43),
(150, 1, 43),
(151, 9, 43),
(152, 11, 44),
(153, 22, 44),
(154, 23, 44),
(155, 1, 45),
(156, 9, 45),
(157, 2, 45),
(159, 1, 47),
(160, 10, 47),
(161, 11, 47),
(162, 12, 47),
(163, 1, 48),
(164, 11, 48),
(165, 12, 48),
(167, 1, 50),
(168, 11, 50),
(169, 2, 50),
(171, 11, 29),
(172, 12, 29),
(173, 13, 29),
(174, 24, 49);

-- --------------------------------------------------------

--
-- Estrutura da tabela `nivel`
--

CREATE TABLE `nivel` (
  `id_nivel` int(11) NOT NULL,
  `numero` int(6) DEFAULT NULL,
  `dificuldade` enum('fácil','normal','difícil') DEFAULT NULL,
  `id_fase` int(11) NOT NULL,
  `xp` int(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `nivel`
--

INSERT INTO `nivel` (`id_nivel`, `numero`, `dificuldade`, `id_fase`, `xp`) VALUES
(8, 1, NULL, 1, 25),
(9, 2, NULL, 1, 40),
(10, 3, NULL, 1, 50),
(11, 4, NULL, 1, 100),
(12, 5, NULL, 1, 150),
(13, 1, NULL, 2, 200),
(14, 2, NULL, 2, 200),
(15, 3, NULL, 2, 200),
(16, 4, NULL, 2, 200),
(17, 5, NULL, 2, 200),
(18, 1, NULL, 3, 300),
(19, 2, NULL, 3, 300),
(20, 3, NULL, 3, 300),
(21, 4, NULL, 3, 300),
(22, 5, NULL, 3, 350),
(23, 1, NULL, 4, 100),
(24, 2, NULL, 4, 100),
(25, 3, NULL, 4, 500),
(26, 4, NULL, 4, 500),
(27, 5, NULL, 4, 500);

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
(1, 'Olá', 'palavra', 'Ayó', 'Olá.mp3', '2025-03-10 22:09:06'),
(2, 'Adeus', 'palavra', 'Kuahádia', 'Adeus.mp3', '2025-03-10 22:09:55'),
(3, 'Vamos', 'palavra', 'Twende', 'Vamos.mp3', '2025-03-10 22:10:41'),
(4, 'Desculpa', 'palavra', 'Nguilaloke', NULL, '2025-03-10 22:12:23'),
(5, 'Entendi', 'palavra', 'Ngakive', NULL, '2025-03-10 22:13:01'),
(6, 'Trabalho', 'palavra', 'Ukalalu', NULL, '2025-03-10 22:13:58'),
(7, 'Música', 'palavra', 'Muimbu', NULL, '2025-03-10 22:15:13'),
(8, 'Dia', 'palavra', 'Kizua', NULL, '2025-03-10 22:16:30'),
(9, 'Noite', 'palavra', 'Ussuku', NULL, '2025-03-10 22:17:06'),
(10, 'Amigo', 'palavra', 'Dikamba', NULL, '2025-03-10 22:17:57'),
(11, 'Fámilia', 'palavra', 'Divumu', NULL, '2025-03-10 22:18:29'),
(12, 'Pai', 'palavra', 'Tata', NULL, '2025-03-10 22:19:35'),
(13, 'Mãe', 'palavra', 'Mama', NULL, '2025-03-10 22:19:56'),
(14, 'Pessoa', 'palavra', 'Muthu', NULL, '2025-03-10 22:20:25'),
(15, 'Gente', 'palavra', 'Mundu', 'Gente.mp3', '2025-03-10 22:20:42'),
(18, 'Casa', 'palavra', 'Nzo', 'Casa.mp3', '2025-03-24 19:47:26'),
(19, 'Escola', 'palavra', 'Xicola', 'Escola.mp3', '2025-03-24 19:50:38'),
(20, 'Mercado', 'palavra', 'Kitanda', 'Mercado.mp3', '2025-03-24 19:51:17'),
(21, 'Triste', 'palavra', 'Kuluada', 'Triste.mp3', '2025-03-24 19:53:10'),
(22, 'Zangado', 'palavra', 'Kufutuluka', 'Zangado.mp3', '2025-03-24 19:53:44'),
(23, 'Comida', 'palavra', 'Kudia', 'Comida.mp3', '2025-04-02 11:28:45'),
(24, 'Estou com frio', 'frase', 'Ngala Ni Nbambe', 'Estou com frio.mp3', '2025-05-04 22:24:57');

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
  ADD PRIMARY KEY (`id_aluno_nivel`),
  ADD KEY `id_aluno` (`id_aluno`),
  ADD KEY `id_nivel` (`id_nivel`);

--
-- Índices para tabela `fase`
--
ALTER TABLE `fase`
  ADD PRIMARY KEY (`id_fase`);

--
-- Índices para tabela `jogabilidade`
--
ALTER TABLE `jogabilidade`
  ADD PRIMARY KEY (`id_jogabilidade`);

--
-- Índices para tabela `jogabilidade_nivel`
--
ALTER TABLE `jogabilidade_nivel`
  ADD PRIMARY KEY (`id_jogabilidade_nivel`),
  ADD KEY `id_nivel` (`id_nivel`),
  ADD KEY `id_jogabilidade` (`id_jogabilidade`);

--
-- Índices para tabela `jogabilidade_nivel_palavra`
--
ALTER TABLE `jogabilidade_nivel_palavra`
  ADD PRIMARY KEY (`id_jogabilidade_nivel_palavra`),
  ADD KEY `id_jogabilidade_nivel` (`id_jogabilidade_nivel`),
  ADD KEY `id_palavra` (`id_palavra`);

--
-- Índices para tabela `nivel`
--
ALTER TABLE `nivel`
  ADD PRIMARY KEY (`id_nivel`),
  ADD KEY `id_fase` (`id_fase`);

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
  MODIFY `id_aluno` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT de tabela `aluno_nivel`
--
ALTER TABLE `aluno_nivel`
  MODIFY `id_aluno_nivel` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;

--
-- AUTO_INCREMENT de tabela `fase`
--
ALTER TABLE `fase`
  MODIFY `id_fase` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `jogabilidade`
--
ALTER TABLE `jogabilidade`
  MODIFY `id_jogabilidade` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `jogabilidade_nivel`
--
ALTER TABLE `jogabilidade_nivel`
  MODIFY `id_jogabilidade_nivel` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT de tabela `jogabilidade_nivel_palavra`
--
ALTER TABLE `jogabilidade_nivel_palavra`
  MODIFY `id_jogabilidade_nivel_palavra` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=175;

--
-- AUTO_INCREMENT de tabela `nivel`
--
ALTER TABLE `nivel`
  MODIFY `id_nivel` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT de tabela `palavra`
--
ALTER TABLE `palavra`
  MODIFY `id_palavra` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de tabela `traducao`
--
ALTER TABLE `traducao`
  MODIFY `id_traducao` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `aluno_nivel`
--
ALTER TABLE `aluno_nivel`
  ADD CONSTRAINT `aluno_nivel_ibfk_1` FOREIGN KEY (`id_aluno`) REFERENCES `aluno` (`id_aluno`),
  ADD CONSTRAINT `aluno_nivel_ibfk_2` FOREIGN KEY (`id_nivel`) REFERENCES `nivel` (`id_nivel`);

--
-- Limitadores para a tabela `jogabilidade_nivel`
--
ALTER TABLE `jogabilidade_nivel`
  ADD CONSTRAINT `jogabilidade_nivel_ibfk_1` FOREIGN KEY (`id_nivel`) REFERENCES `nivel` (`id_nivel`),
  ADD CONSTRAINT `jogabilidade_nivel_ibfk_2` FOREIGN KEY (`id_jogabilidade`) REFERENCES `jogabilidade` (`id_jogabilidade`);

--
-- Limitadores para a tabela `jogabilidade_nivel_palavra`
--
ALTER TABLE `jogabilidade_nivel_palavra`
  ADD CONSTRAINT `jogabilidade_nivel_palavra_ibfk_1` FOREIGN KEY (`id_jogabilidade_nivel`) REFERENCES `jogabilidade_nivel` (`id_jogabilidade_nivel`),
  ADD CONSTRAINT `jogabilidade_nivel_palavra_ibfk_2` FOREIGN KEY (`id_palavra`) REFERENCES `palavra` (`id_palavra`);

--
-- Limitadores para a tabela `nivel`
--
ALTER TABLE `nivel`
  ADD CONSTRAINT `nivel_ibfk_1` FOREIGN KEY (`id_fase`) REFERENCES `fase` (`id_fase`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
