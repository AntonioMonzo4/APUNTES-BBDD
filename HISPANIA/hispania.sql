-- MySQL dump 10.19  Distrib 10.3.39-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: hispania
-- ------------------------------------------------------
-- Server version	10.3.39-MariaDB-0ubuntu0.20.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `provincias`
--

DROP TABLE IF EXISTS `provincias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `provincias` (
  `cp` int(11) NOT NULL,
  `nombre` varchar(30) DEFAULT NULL,
  `comunidad` varchar(30) DEFAULT NULL,
  `km2` int(11) DEFAULT NULL,
  `poblacion` int(11) DEFAULT NULL,
  PRIMARY KEY (`cp`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `provincias`
--

LOCK TABLES `provincias` WRITE;
/*!40000 ALTER TABLE `provincias` DISABLE KEYS */;
INSERT INTO `provincias` VALUES (1,'Álava','País Vasco',3037,331103),(2,'Albacete','Castilla-La Mancha',14924,387969),(3,'Alicante','Comunidad Valenciana',5817,1923000),(4,'Almería','Andalucía',8775,729201),(5,'Ávila','Castilla y León',8050,159317),(6,'Badajoz','Extremadura',21766,666971),(7,'Islas Baleares','Islas Baleares',4992,1232270),(8,'Barcelona','Cataluña',7728,6658399),(9,'Burgos','Castilla y León',14292,352331),(10,'Cáceres','Extremadura',19868,385472),(11,'Cádiz','Andalucía',7440,1260204),(12,'Castellón','Comunidad Valenciana',6636,582434),(13,'Ciudad Real','Castilla-La Mancha',19813,489755),(14,'Córdoba','Andalucía',13771,776582),(15,'La Coruña','Galicia',7950,1122032),(16,'Cuenca','Castilla-La Mancha',17140,198990),(17,'Gerona','Cataluña',5910,783420),(18,'Granada','Andalucía',12647,932248),(19,'Guadalajara','Castilla-La Mancha',12214,268860),(20,'Guipúzcoa','País Vasco',1980,714906),(21,'Huelva','Andalucía',10128,533989),(22,'Huesca','Aragón',15636,222713),(23,'Jaén','Andalucía',13496,620762),(24,'León','Castilla y León',15581,451209),(25,'Lérida','Cataluña',12172,439506),(26,'La Rioja','La Rioja',5045,316806),(27,'Lugo','Galicia',9856,323984),(28,'Madrid','Comunidad de Madrid',8028,6825005),(29,'Málaga','Andalucía',7306,1722388),(30,'Murcia','Región de Murcia',11314,1531140),(31,'Navarra','Navarra',10391,661830),(32,'Orense','Galicia',7273,303960),(33,'Asturias','Asturias',10604,1005397),(34,'Palencia','Castilla y León',8052,157205),(35,'Las Palmas','Canarias',4066,1159313),(36,'Pontevedra','Galicia',4495,943473),(37,'Salamanca','Castilla y León',12350,326080),(38,'Santa Cruz de Tenerife','Canarias',3381,1102340),(39,'Cantabria','Cantabria',5321,585221),(40,'Segovia','Castilla y León',6921,153993),(41,'Sevilla','Andalucía',14036,1962999),(42,'Soria','Castilla y León',10306,89519),(43,'Tarragona','Cataluña',6303,828809),(44,'Teruel','Aragón',14810,133338),(45,'Toledo','Castilla-La Mancha',15370,712472),(46,'Valencia','Comunidad Valenciana',10807,2600793),(47,'Valladolid','Castilla y León',8110,518950),(48,'Vizcaya','País Vasco',2217,1135269),(49,'Zamora','Castilla y León',10561,167362),(50,'Zaragoza','Aragón',17274,959471),(51,'Ceuta','Ceuta',19,82147),(52,'Melilla','Melilla',13,82810);
/*!40000 ALTER TABLE `provincias` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-18 17:00:36
