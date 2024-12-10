-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 23, 2024 at 10:18 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `restaurant`
--

-- --------------------------------------------------------

--
-- Table structure for table `booking`
--

CREATE TABLE `booking` (
  `Name` varchar(255) NOT NULL,
  `Date` int(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Time` int(255) NOT NULL,
  `Phone` int(255) NOT NULL,
  `Person` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `booking`
--

INSERT INTO `booking` (`Name`, `Date`, `Email`, `Time`, `Phone`, `Person`) VALUES
('Areesha', 2023, 'areeshaasif523@gmal.com', 21, 310, 2),
('Areesha', 2023, 'areeshaasif523@gmal.com', 21, 310, 2),
('hifza', 2004, 'hifzaasif@gmail.com', 14, 312456667, 23),
('hifza', 2004, 'hifzaasif@gmail.com', 14, 312456667, 23);

-- --------------------------------------------------------

--
-- Table structure for table `order_details`
--

CREATE TABLE `order_details` (
  `Full Name` varchar(255) NOT NULL,
  `Mobile Number` int(255) NOT NULL,
  `Address` varchar(255) NOT NULL,
  `City` varchar(255) NOT NULL,
  `Street` varchar(255) NOT NULL,
  `Zip` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `order_details`
--

INSERT INTO `order_details` (`Full Name`, `Mobile Number`, `Address`, `City`, `Street`, `Zip`) VALUES
('', 0, '', '', ' ', 0),
('', 0, '', '', ' ', 0),
('Areesha', 314, 'FB Area', 'Karachi', 'Ayesha Manzil ', 0);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
