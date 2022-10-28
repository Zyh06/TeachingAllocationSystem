-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: project_allocation
-- ------------------------------------------------------
-- Server version	8.0.29

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
-- Table structure for table `coordinator`
--

DROP TABLE IF EXISTS `coordinator`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `coordinator` (
  `Email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Password` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`Email`) USING BTREE,
  UNIQUE KEY `email_UNIQUE` (`Email`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coordinator`
--

LOCK TABLES `coordinator` WRITE;
/*!40000 ALTER TABLE `coordinator` DISABLE KEYS */;
INSERT INTO `coordinator` VALUES ('Mike@gmail.com','12345'),('Nancy@gmail.com','12345');
/*!40000 ALTER TABLE `coordinator` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project`
--

DROP TABLE IF EXISTS `project`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `project` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `OrganizationName` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ProjectTitle` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Description` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Deliverables` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `KnowledgeSkill` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project`
--

LOCK TABLES `project` WRITE;
/*!40000 ALTER TABLE `project` DISABLE KEYS */;
INSERT INTO `project` VALUES (1,'organizationName22','projectTitle22','projectDescription22','deliverables22','knowledgeSkills22'),(2,'organizationName11','projectTitle11','projectDescription11','deliverables11','knowledgeSkills11'),(3,'organizationName33','projectTitle33','projectDescription33','deliverables33','knowledgeSkills33'),(4,'organizationName0','projectTitle0','projectDescription0','deliverables0','knowledgeSkills0'),(5,'organizationNameX','projectTitleX','projectDescriptionX','deliverablesX','knowledgeSkillsX'),(6,'organizationNameX1','projectTitleX1','projectDescriptionX1','deliverablesX1','knowledgeSkillsX1'),(7,'organizationNameX1','projectTitleX1222','projectDescriptionX1','deliverablesX1','knowledgeSkillsX1'),(8,'test1n','test1p','test1d','test1d','test1r'),(9,'11111','22222','55555','3333','44444'),(10,'organizationName new 1','projectTitle new 1','projectDescription new 1','deliverables new 1','knowledgeSkills new 1'),(11,'organizationName new 2','projectTitle new 2','projectDescription new 2','deliverables new 2','knowledgeSkills new 2'),(12,'1111','11111','1212','11121','1212'),(13,'Organization Name 1','Project Title 1','Project Description 1','Deliverables 1','Required Knowledge and Skills 1'),(14,'Organization Name 6','Project Title 6','Project Description 6','Deliverables 6','Required Knowledge and Skills 6'),(15,'Organization Name 2','Project Title 2','Project Description 2','Deliverables 2','Required Knowledge and Skills 2'),(16,'Organization Name 3','Project Title 3','Project Description 3','Deliverables 3','Required Knowledge and Skills 3'),(17,'Organization Name 4','Project Title 4','Project Description 4','Deliverables 4','Required Knowledge and Skills 4'),(18,'Organization Name 5','Project Title 5','Project Description 5','Deliverables 5','Required Knowledge and Skills 5'),(19,'Organization Name 7','Project Title 7','Project Description 7','Deliverables 7','Required Knowledge and Skills 7'),(20,'Organization Name 8','Project Title 8','Project Description 8','Deliverables 8','Required Knowledge and Skills 8');
/*!40000 ALTER TABLE `project` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student` (
  `StudentID` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `FamilyName` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `GivenName` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Title` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Email` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Gpa` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Perference` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `Skills` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `TeamName` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `ProjectID` int DEFAULT NULL,
  PRIMARY KEY (`StudentID`) USING BTREE,
  KEY `id_idx` (`ProjectID`) USING BTREE,
  CONSTRAINT `id` FOREIGN KEY (`ProjectID`) REFERENCES `project` (`ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student`
--

LOCK TABLES `student` WRITE;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
INSERT INTO `student` VALUES ('100000005','John','Sims','Ms','128722@qut.edu.au','4.7','MOB, WWW, AI/ML, INN','GAM, MIS, AI/ML','Tree Team',2),('100000006','Nicky','Windsor','Ms','127902@qut.edu.au','6','MOB, WWW, AI/ML','MOB, WWW, AI/ML, INN','Tree Team',2),('100000007','Mille','Adem','Mr','987122@qut.edu.au','5.4','WWW, GAM, MIS','INN, ATSI','Tree Team',2),('100000008','Andy','Sine','Mr','134222@qut.edu.au','6.3','WWW, GAM, MIS','WWW, GAM, MIS','Tree Team',2),('100000009','Rose','Wina','Ms','209822@qut.edu.au','5.7','INN, ATSI','INN, ATSI','Fire Team',NULL),('100000010','Luke','Dousen','Mr','121275@qut.edu.au','6.2','MOB, WWW, AI/ML, INN','GAM, MIS, AI/ML','Fire Team',NULL),('100000011','Mickle','Cemy','Mr','120972@qut.edu.au','4.25','GAM, MIS, AI/ML','GAM, MIS, AI/ML','Fire Team',NULL),('100000012','Cindy','Roth','Ms','122166@qut.edu.au','5.6','WWW, GAM, MIS','WWW, GAM, MIS','Fire Team',NULL),('10000011','Miky','Tum','Mr','qwqw@gmail.com','5.3','Perference 11','Skills 1','Bear Team',8),('10000012','Lumm','Barli','Ms','211a1s@gmail.com','6','Perference 22','Skills 2','Bear Team',8),('10000013','Rose','Dousten','Ms','sksk7@gmail.com','5','Perference 33','Skills 3','Bear Team',8),('10000014','Olive','Sims','Mr','109k@gmail.com','4.65','Perference 44','Skills 4','Bear Team',8);
/*!40000 ALTER TABLE `student` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-26 23:57:07
