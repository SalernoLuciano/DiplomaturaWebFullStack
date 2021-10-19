-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 19-10-2021 a las 14:30:07
-- Versión del servidor: 5.7.31
-- Versión de PHP: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ejercicio`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

DROP TABLE IF EXISTS `empleados`;
CREATE TABLE IF NOT EXISTS `empleados` (
  `id_empleado` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `trabajo` varchar(100) NOT NULL,
  `edad` int(3) NOT NULL,
  `salario` decimal(8,0) NOT NULL,
  `email` varchar(150) NOT NULL,
  PRIMARY KEY (`id_empleado`)
) ENGINE=MyISAM AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`id_empleado`, `nombre`, `apellido`, `trabajo`, `edad`, `salario`, `email`) VALUES
(1, 'Juan', 'Hagan', 'Programador Senior', 32, '120000', 'juan_hagan@bignet.com'),
(2, 'Gonzalo', 'Pillai', 'Programador Senior', 32, '110000', 'g_pillai@bignet.com'),
(3, 'Ana', 'Dharma', 'Desarrollador Web', 27, '90000', 'ana@bignet.com'),
(4, 'Maria', 'Anchor', 'Desarrollador Web', 26, '85000', 'mary@bignet.com'),
(5, 'Alfred', 'Fernandez', 'Programador', 31, '75000', 'af@bignet.com'),
(6, 'Juan', 'Agüero', 'Programador', 36, '85000', 'juan@bignet.com'),
(7, 'Eduardo', 'Sacan', 'Programador', 25, '85000', 'eddi@bignet.com'),
(8, 'Alejandro', 'Nanda', 'Programador', 32, '70000', 'alenanda@bignet.com'),
(23, 'Luciano', 'Salerno', 'Programador', 31, '4', 'lsalerno@fi.uba.ar'),
(10, 'Pablo', 'Simon', 'Especialista Multimedia', 43, '85000', 'ps@bignet.com'),
(11, 'Arturo', 'Hernandez', 'Especialista Multimedia', 32, '75000', 'arturo@bignet.com'),
(12, 'Jimena', 'Cazado', 'Diseñador Web', 32, '110000', 'jimena@bignet.com'),
(13, 'Roberto', 'Luis', 'Administrador de sistemas', 35, '100000', 'roberto@bignet.com'),
(14, 'Daniel', 'Gutierrez', 'Administrador de sistemas', 34, '90000', 'daniel@bignet.com'),
(15, 'Miguel', 'Harper', 'Ejecutivo de Ventas Senior', 36, '120000', 'miguel@bignet.com'),
(16, 'Monica', 'Sanchez', 'Ejecutivo de ventas', 30, '90000', 'monica@bignet.com'),
(17, 'Alicia', 'Simlai', 'Ejecutivo de ventas', 27, '70000', 'alicia@bignet.com'),
(18, 'Jose', 'Iriarte', 'Ejecutivo de ventas', 27, '72000', 'jose@bignet.com'),
(19, 'Sabrina', 'Allende', 'Gerente de Soporte tecnico', 32, '200000', 'sabrina@bignet.com'),
(20, 'Pedro', 'Campeon', 'Gerente de finanzas', 36, '220000', 'pedro@bignet.com'),
(21, 'Mariano', 'Dharma', 'Presidente', 28, '300000', 'mariano@bignet.com'),
(22, 'Francisco', 'Perez', 'Programador', 26, '90000', 'francisco@bignet.com'),
(24, 'Luciano', 'Salerno', 'Programador', 31, '4', 'lsalerno@fi.uba.ar'),
(25, 'Pablo', 'Gomez', 'Programador', 31, '4', 'pgomez@fi.uba.ar');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
