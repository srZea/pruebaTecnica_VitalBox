-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-02-2024 a las 22:00:24
-- Versión del servidor: 8.0.36
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `datapatient`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `patient`
--

CREATE TABLE `patient` (
  `name` varchar(300) NOT NULL,
  `last_name` varchar(300) NOT NULL,
  `document_type` varchar(300) NOT NULL,
  `document_number` int NOT NULL,
  `birthdate` varchar(300) NOT NULL,
  `age` int NOT NULL,
  `size` double NOT NULL,
  `weight` double NOT NULL,
  `imc` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `patient`
--

INSERT INTO `patient` (`name`, `last_name`, `document_type`, `document_number`, `birthdate`, `age`, `size`, `weight`, `imc`) VALUES
('Arturo', 'Garcia', 'Cedula', 3034444, '1995-02-08T05:00:00.000Z', 33, 1.7, 60.5, 28.5),
('Juan', 'Zea', 'Cedula', 10155550, '', 30, 1.7, 60.5, 25.5),
('Alfredo', 'Garcia', 'Cedula', 10252623, '', 30, 1.7, 60.5, 25.5);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `patient`
--
ALTER TABLE `patient`
  ADD PRIMARY KEY (`document_number`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
