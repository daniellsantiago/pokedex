CREATE DATABASE  IF NOT EXISTS `pokedex` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `pokedex`;
-- MySQL dump 10.13  Distrib 8.0.20, for Linux (x86_64)
--
-- Host: localhost    Database: pokedex
-- ------------------------------------------------------
-- Server version	8.0.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `pokemons_tipos`
--

DROP TABLE IF EXISTS `pokemons_tipos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pokemons_tipos` (
  `id_pokemon` int NOT NULL,
  `id_tipo` int NOT NULL,
  PRIMARY KEY (`id_pokemon`,`id_tipo`),
  KEY `fk_pokemons_tipos_1_idx` (`id_tipo`),
  CONSTRAINT `fk_pokemons_tipos_1` FOREIGN KEY (`id_tipo`) REFERENCES `tipos` (`id`),
  CONSTRAINT `fk_pokemons_tipos_2` FOREIGN KEY (`id_pokemon`) REFERENCES `pokemon` (`numero_dex`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pokemons_tipos`
--

LOCK TABLES `pokemons_tipos` WRITE;
/*!40000 ALTER TABLE `pokemons_tipos` DISABLE KEYS */;
INSERT INTO `pokemons_tipos` VALUES (7,1),(8,1),(9,1),(54,1),(55,1),(60,1),(61,1),(62,1),(72,1),(73,1),(79,1),(80,1),(90,1),(91,1),(98,1),(99,1),(116,1),(117,1),(118,1),(119,1),(120,1),(121,1),(129,1),(130,1),(131,1),(134,1),(138,1),(139,1),(140,1),(147,1),(148,1),(6,2),(16,2),(17,2),(18,2),(21,2),(22,2),(41,2),(42,2),(83,2),(84,2),(85,2),(142,2),(144,2),(145,2),(146,2),(149,2),(130,3),(147,3),(148,3),(149,3),(25,4),(26,4),(81,4),(82,4),(100,4),(101,4),(125,4),(135,4),(145,4),(35,5),(36,5),(39,5),(40,5),(92,6),(93,6),(94,6),(4,7),(5,7),(6,7),(37,7),(38,7),(58,7),(59,7),(77,7),(78,7),(126,7),(136,7),(146,7),(138,8),(139,8),(140,8),(141,8),(142,8),(86,9),(87,9),(91,9),(124,9),(144,9),(10,10),(11,10),(12,10),(13,10),(14,10),(15,10),(46,10),(47,10),(127,10),(56,11),(57,11),(66,11),(67,11),(68,11),(106,11),(107,11),(125,11),(19,12),(20,12),(29,12),(30,12),(31,12),(32,12),(33,12),(34,12),(52,12),(53,12),(108,12),(111,12),(112,12),(113,12),(115,12),(128,12),(132,12),(133,12),(143,12),(74,13),(75,13),(76,13),(95,13),(138,13),(139,13),(140,13),(142,13),(1,14),(2,14),(3,14),(43,14),(44,14),(45,14),(69,14),(70,14),(71,14),(102,14),(103,14),(114,14),(123,14),(63,15),(64,15),(65,15),(96,15),(97,15),(102,15),(103,15),(122,15),(137,15),(150,15),(151,15),(27,16),(28,16),(50,16),(51,16),(104,16),(105,16),(13,17),(14,17),(15,17),(23,17),(24,17),(29,17),(30,17),(31,17),(32,17),(33,17),(34,17),(41,17),(42,17),(48,17),(49,17),(88,17),(89,17),(109,17),(110,17);
/*!40000 ALTER TABLE `pokemons_tipos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-06-16 17:26:36
