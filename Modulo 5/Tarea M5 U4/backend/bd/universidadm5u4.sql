-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 15-11-2021 a las 12:49:58
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
-- Base de datos: `universidadm5u4`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` text NOT NULL,
  `cuerpo` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`) VALUES
(1, 'Dura crítica de Human Rights Watch a la postura de la Argentina sobre Nicaragua: “Es un disparate”', 'El Director Ejecutivo para las Américas, José Miguel Vivanco, cuestionó el comunicado de la cancillería argentina y dejó en evidencia la incoherencia de la posición', 'Human Rights Watch (HRW), una de las ONG más reconocidas a nivel mundial, cuestionó este martes la posición adoptada por el gobierno argentino de Alberto Fernández respecto a las graves violaciones a los derechos humanos que se suceden en Nicaragua y a la farsa electoral que tuvo lugar el domingo y que coronó a Daniel Ortega nuevamente como presidente. “Es un disparate”, dijo su Director Ejecutivo para las Américas, José Miguel Vivanco en un mensaje publicado en su cuenta de Twitter.\r\n\r\n“Disparate de la Cancillería Argentina sobre Nicaragua. En su opinión, las elecciones y la detención de candidatos presidenciales son dos cosas distintas. Les ‘preocupan’ las detenciones pero no se pronuncian sobre las elecciones por tratarse de ‘cuestiones internas’”, señaló Vivanco.\r\n\r\n'),
(2, 'Rodriguez Larreta: “Un chico puede votar a los 16 pero no es punible, ahí hay una contradicción”', 'El jefe de Gobierno porteño pidió “un régimen penal juvenil especial” para los delitos cometidos por menores y aseguró que hay que cambiar el Código de Procedimiento Penal', 'En medio de la indignación social por el brutal crimen del kiosquero en Ramos Mejía a manos de un hombre de 30 años y una menor de 15, Horacio Rodríguez Larreta se refirió a la baja de la edad de imputabilidad, un fuerte reclamo desde hace varios años de un sector de la política que pide penas más fuertes para los menores que delinquen.\r\n\r\nA raíz de esto, el jefe de Gobierno porteño planteó que “lo más importante es el cambio en el Código de Procedimiento Penal, que lo que permite las excarcelaciones, que hace eternos los juicios” pero también aseguró que “no puede ser que no sea punible” un chico de 16 años que comete un crimen.\r\n\r\n“Con menores para mí no es bajar la edad, sino que haya un régimen penal juvenil especial. Tiene que ver con la educación pero con que haya instituciones, con los temas sociales, con que hay menores que matan gente. Hoy un chico puede votar a los 16 pero no es punible, ahí hay una contradicción. No puede ser que no sea punible. Capaz no lo es de la misma manera que un adulto, pero eso no quiere decir que no tenga que ser punible”, afirmó Larreta en diálogo en radio Metro.'),
(6, 'Si no hay medio embarazo, menos media derrota: el Gobierno perdió las elecciones', 'Al oficialismo no le alcanzó la arriada de votantes en base a platita para torcer el rumbo en una provincia de Buenos Aires diezmada por calamidades del subdesarrollo', 'El Gobierno perdió en quince provincias. Resultó abrumada en distritos densos como Capital Federal (47% a 25%), Córdoba (54% a 10), Santa Fe (40% a 31%), Mendoza (49 % a 26%) y Entre Ríos (54% a 31%). En la inmanejable e indescriptible provincia de Buenos Aires fue derrotada por un escaso margen, pero como aún la democracia se mide en números, fue derrotada. Porque, hasta ahora se insiste, 39% es más que 38%. Un poco menos de dos por ciento de los votos alcanza para decir que el Frente de Todos perdió.\r\n\r\nEl Senado Nacional deja de ser controlado por los obedientes de Cristina Kirchner y en diputados el PJ perdió dos diputados y, es cierto, la primera minoría. ¿Eso no es una derrota?');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'lsalerno', 'b7475c63ac9c7d4940d329771816db08'),
(3, 'flavia', '81dc9bdb52d04dc20036dbd8313ed055');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
