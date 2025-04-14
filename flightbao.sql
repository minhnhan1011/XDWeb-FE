-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Mar 31, 2024 at 01:41 PM
-- Server version: 8.2.0
-- PHP Version: 8.2.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `flightbao`
--

-- --------------------------------------------------------

--
-- Table structure for table `khachhang`
--

DROP TABLE IF EXISTS `khachhang`;
CREATE TABLE IF NOT EXISTS `khachhang` (
  `makh` int NOT NULL AUTO_INCREMENT,
  `Tenkh` varchar(50) NOT NULL,
  `sdt` varchar(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `matkhau` varchar(50) NOT NULL,
  PRIMARY KEY (`makh`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `khachhang`
--

INSERT INTO `khachhang` (`makh`, `Tenkh`, `sdt`, `email`, `matkhau`) VALUES
(1, 'Nguyễn Minh Triều', '0899459421', 'trieunm2002@gmail.com', 'minhtrieu2002');

-- --------------------------------------------------------

--
-- Table structure for table `thongtinvemaybay`
--

DROP TABLE IF EXISTS `thongtinvemaybay`;
CREATE TABLE IF NOT EXISTS `thongtinvemaybay` (
  `id` int NOT NULL AUTO_INCREMENT,
  `mamaybay` varchar(50) NOT NULL,
  `diemdi` varchar(50) NOT NULL,
  `diemden` varchar(50) NOT NULL,
  `ngaydi` varchar(50) NOT NULL,
  `ngayden` varchar(50) NOT NULL,
  `hanghangkhong` varchar(50) NOT NULL,
  `gia` int NOT NULL,
  `ho` varchar(50) NOT NULL,
  `ten` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `sdt` varchar(11) NOT NULL,
  `dc` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `thongtinvemaybay`
--

INSERT INTO `thongtinvemaybay` (`id`, `mamaybay`, `diemdi`, `diemden`, `ngaydi`, `ngayden`, `hanghangkhong`, `gia`, `ho`, `ten`, `email`, `sdt`, `dc`) VALUES
(1, '321', 'SGN', 'HAN', '2024-03-24T07:30:00', '2024-03-24T09:40:00', 'VJ', 1631500, 'nguyen', 'trieu', 'trieunm2002', '0899459421', 'skdadgkadsfkasfd'),
(2, '320', 'SGN', 'HAN', '2024-04-10T20:30:00', '2024-04-10T22:30:00', 'VN', 3664960, 'anh ', 'tu ', 'sdfa@daf.com', '123', 'asdfafds');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
