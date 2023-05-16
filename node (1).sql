-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Värd: 127.0.0.1
-- Tid vid skapande: 16 maj 2023 kl 12:39
-- Serverversion: 10.4.28-MariaDB
-- PHP-version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Databas: `node`
--

-- --------------------------------------------------------

--
-- Tabellstruktur `donors`
--

CREATE TABLE `donors` (
  `id` int(11) NOT NULL,
  `fname` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `lname` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `pnummer` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `btype` varchar(6) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `bdis` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumpning av Data i tabell `donors`
--

INSERT INTO `donors` (`id`, `fname`, `lname`, `pnummer`, `btype`, `bdis`) VALUES
(1, 'Erik', 'Andersson', '840115-1234', 'A+', 1),
(2, 'Anna', 'Berglund', '760501-5678', 'B-', 0),
(3, 'Oscar', 'Carlsson', '880311-9876', 'AB+', 1),
(4, 'Emma', 'Dahlberg', '910628-3456', 'O-', 1),
(5, 'Gustav', 'Eklund', '950703-7890', 'A-', 0),
(6, 'Alice', 'Falk', '830825-2345', 'B+', 1),
(7, 'Hugo', 'Gustafsson', '870415-8765', 'AB-', 0),
(8, 'Olivia', 'Holm', '900527-4321', 'O+', 1),
(9, 'Isak', 'Isaksson', '940705-5678', 'A-', 1),
(10, 'Klara', 'Johansson', '820212-1234', 'B+', 0),
(11, 'Filip', 'Karlsson', '970315-9876', 'AB+', 1),
(12, 'Elin', 'Larsson', '890710-3456', 'O-', 0),
(13, 'Max', 'Lundgren', '930602-7890', 'A+', 1),
(14, 'Ida', 'Månsson', '860303-2345', 'B-', 1),
(15, 'Viktor', 'Nilsson', '920112-8765', 'AB-', 0),
(16, 'Sofia', 'Nyström', '960421-4321', 'O+', 1),
(17, 'Joel', 'Persson', '800506-5678', 'A-', 1),
(18, 'Ellen', 'Pettersson', '910929-1234', 'B+', 0),
(19, 'Arvid', 'Sandberg', '850718-9876', 'AB+', 1),
(20, 'Vera', 'Sjöberg', '890830-3456', 'O-', 0),
(21, 'Nils', 'Svensson', '900101-5678', 'A+', 1),
(22, '123', '123', 'hej', 'hej', 0),
(23, 'ja', 'son', '123456789', 'O-', 1),
(24, '22', '22', '22', '22', 0),
(25, '22', '22', '', '', 0),
(26, '22', '22', '', '', 0);

-- --------------------------------------------------------

--
-- Tabellstruktur `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumpning av Data i tabell `users`
--

INSERT INTO `users` (`id`, `username`, `password`) VALUES
(1, 'kjelladmin', 'kjelladmin'),
(2, 'jasonadmin', 'jason123'),
(3, 'adminkjell', 'adminkjell'),
(4, 'jasonadmin', 'jasonadmin'),
(5, 'adminjason', 'adminjason'),
(6, 'jason123', 'jasonjason'),
(7, 'test', 'test');

--
-- Index för dumpade tabeller
--

--
-- Index för tabell `donors`
--
ALTER TABLE `donors`
  ADD PRIMARY KEY (`id`);

--
-- Index för tabell `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT för dumpade tabeller
--

--
-- AUTO_INCREMENT för tabell `donors`
--
ALTER TABLE `donors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT för tabell `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
