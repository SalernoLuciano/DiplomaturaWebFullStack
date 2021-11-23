-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 23-11-2021 a las 14:24:22
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
  `img_id` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`, `img_id`) VALUES
(1, 'Dura crítica de Human Rights Watch a la postura de la Argentina sobre Nicaragua: “Es un disparate”', 'El Director Ejecutivo para las Américas, José Miguel Vivanco, cuestionó el comunicado de la cancillería argentina y dejó en evidencia la incoherencia de la posición', 'Human Rights Watch (HRW), una de las ONG más reconocidas a nivel mundial, cuestionó este martes la posición adoptada por el gobierno argentino de Alberto Fernández respecto a las graves violaciones a los derechos humanos que se suceden en Nicaragua y a la farsa electoral que tuvo lugar el domingo y que coronó a Daniel Ortega nuevamente como presidente. “Es un disparate”, dijo su Director Ejecutivo para las Américas, José Miguel Vivanco en un mensaje publicado en su cuenta de Twitter.\r\n\r\n“Disparate de la Cancillería Argentina sobre Nicaragua. En su opinión, las elecciones y la detención de candidatos presidenciales son dos cosas distintas. Les ‘preocupan’ las detenciones pero no se pronuncian sobre las elecciones por tratarse de ‘cuestiones internas’”, señaló Vivanco.\r\n\r\n', NULL),
(2, 'Alerta en Barcelona: Kun Agüero daría una conferencia de prensa para hablar sobre su futuro en el fútbol', 'El periodista catalán Gerard Romero advirtió que el delantero argentino anunciaría su retiro de la práctica profesional a raíz del problema cardíaco que sufrió frente al Alavés', 'La preocupación por el estado de salud de Sergio Agüero creció en las últimas horas tras una noticia que surgió de tierras catalanas: advierten que prepara una conferencia de prensa para la próxima semana donde podría anunciar su retiro del fútbol tras el problema cardíaco que lo afectó recientemente en el Barcelona.\r\n\r\n“Puedo confirmar que el Kun Agüero se retira del futbol. Después de valorar las situaciones que pasaron los últimos días y lo que le comunicaron los médicos decidió dejar el futbol. La próxima semana el Kun dará una conferencia de prensa para anunciar su salida del fútbol por un tema de salud. No recomiendan que siga con la practica del fútbol y el Kun lo tiene decidido. La próxima semana lo anunciará”, afirmó el periodista Gerard Romero en su canal de Twitch llamado Jijantes.', 'evqkkwsznvrcf8qyzp5b'),
(6, 'Se entregaron los tres policías implicados en la muerte de Lucas González', 'Los efectivos de la Ciudad, el inspector Gabriel Isassi, el oficial mayor Fabián López y el oficial José Nievas fueron llevados a un calabozo a cuatro días de ocurrido el hecho', 'Tras el pedido detención que realizó el fiscal Leonel Gómez Barbella, los tres policías acusados de asesinar de un disparo en la cabeza el miércoles pasado a Lucas González, el jugador de Barracas Central de 17 años, se entregaron a la Justicia y quedaron detenidos. Así, los efectivos de la Ciudad, el inspector Gabriel Isassi, el oficial mayor Fabián López y el oficial José Nievas fueron llevados a un calabozo a cuatro días de ocurrido el hecho.\r\n\r\n“Recién se entregaron y están detenidos. Ahora quiero ver de qué se trata la prueba que están produciendo, ya que nos interesa declarar y ponernos a disposición de la Justicia”, dijo a Infobae el abogado de los policías, Alfredo Oliván.\r\n\r\n\r\nLos tres están acusados del delito de homicidio agravado por haber sido perpetrado por miembros de las fuerzas policiales abusando de sus funciones, imputación que prevé la pena de prisión perpetua. “Hay que indagarlos. La prueba es suficiente”, asegura una fuente cercana al expediente.\r\n\r\nLa causa fue delegada al fiscal Gómez Barbella ayer por la tarde, tras una decisión del magistrado Martín del Viso. En un lapso de cuatro horas, decretó un estricto secreto de sumario, contactó a la madre de Lucas para informarla del progreso de la investigación y requirió también a la DOVIC, el área de la Procuración dedicada al acompañamiento de víctimas, que asista a los González. Además, en un segundo escrito elevado al juez Del Viso, Gómez Barbella requirió que cualquier pedido de eximición de prisión que sea presentado por las defensas del inspector Gabriel Isassi, del oficial mayor Fabián López y del oficial José Nievas sea rechazado.\r\n\r\nPoco antes de que se entregaran, se conoció el resultado preliminar de la autopsia realizada sobre Lucas: el joven recibió un disparo en la cabeza que le quitó la vida. Además, se reveló que la causal de la muerte fue la lesión del proyectil que le ingresó en el cráneo y le causó una hemorragia interna, según confirmaron fuentes del la investigación a Infobae. También, indicaron que Lucas tenía un surco en el pómulo derecho de una segunda bala. Es decir, que hubo un segundo disparo a matar.', 'dmzoywpeqrks0qpaz6zl'),
(12, 'Argentina y su presión tributaria sin freno: si no fuera por la evasión, sería más alta que en los países europeos', 'La carga impositiva legal sobre empresas y familias argentinas supera las de España, Italia y Chile y compite cabeza a cabeza con Brasil. La Matanza y CABA versus Santiago de Chile, Brasilia, San Pablo, Madrid, Barcelona, Roma y Milán', '“Queremos promover la inversión productiva que genera empleo y asegurar así que la recuperación llegue a cada familia argentina. Este camino requiere, antes que nada, seguir impulsando el crecimiento del mercado interno. Y para ello, el Estado debe ser capaz de impulsar la demanda agregada (…) Es necesario también seguir el camino del ordenamiento de las cuentas del Estado, pero jamás a costa de un ajuste del gasto”. La frase la dijo Alberto Fernández, el domingo pasado al anunciar envío al Congreso de un plan “plurianual”, base para un eventual acuerdo con el FMI.', 'x73rfshvixilo3ufemeb');

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
