-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 08, 2020 at 02:22 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_sipPos`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(64) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Food', '2020-08-06 08:22:50', '2020-08-06 08:22:50'),
(2, 'Drink', '2020-08-06 08:22:50', '2020-08-06 08:22:50'),
(4, 'Electronic', '2020-08-06 12:41:13', '2020-08-06 12:41:13');

-- --------------------------------------------------------

--
-- Table structure for table `histories`
--

CREATE TABLE `histories` (
  `id` int(11) NOT NULL,
  `invoice` varchar(32) NOT NULL,
  `idUser` int(11) NOT NULL,
  `isMember` int(11) NOT NULL,
  `orders` varchar(256) NOT NULL,
  `purchaseAmount` varchar(32) NOT NULL,
  `initialPrice` varchar(32) NOT NULL,
  `priceAmount` varchar(32) NOT NULL,
  `amount` int(11) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
--

CREATE TABLE `settings` (
 `id` int(11) NOT NULL,
 `appName` varchar(128) NOT NULL,
 `isOpen` varchar(64) NOT NULL,
 `isOpenMessage` varchar(256) NOT NULL,
 `dayOne` varchar(256) NOT NULL,
 `dayTwo` varchar(256) NOT NULL,
 `clockOne` varchar(256) NOT NULL,
 `clockTwo` varchar(256) NOT NULL,
 `address` varchar(256) NOT NULL,
 `showRole` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(64) NOT NULL,
  `price` decimal(11) NOT NULL,
  `image` varchar(256) NOT NULL,
  `idCategory` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `image`, `idCategory`, `createdAt`, `updatedAt`) VALUES
(8, 'Espresso', 10000, 'tes', 1, '2020-08-04 22:29:20', '2020-08-04 22:29:20'),
(9, 'Cofee Latte', 15000, 'tes', 1, '2020-08-04 22:29:38', '2020-08-04 22:29:38'),
(10, 'Cappucino', 5000, 'tes', 1, '2020-08-04 22:30:02', '2020-08-04 22:30:02'),
(11, 'Red Valvet Latte', 33000, 'tes', 1, '2020-08-04 22:30:25', '2020-08-04 22:30:25'),
(12, 'Chocho Rhum', 28000, 'tes', 2, '2020-08-04 22:30:47', '2020-08-04 22:31:13'),
(13, 'Black Forest', 30000, 'tes', 2, '2020-08-04 22:31:41', '2020-08-04 22:31:41'),
(14, 'Chicken Katsu Dabu-dabu', 30000, 'tes', 2, '2020-08-04 22:32:21', '2020-08-04 22:32:21'),
(15, 'Salmon Truffle Teriyaki', 60000, 'tes', 2, '2020-08-04 22:32:42', '2020-08-04 22:32:42'),
(25, 'Data baru', 9000, 'tes', 1, '2020-08-06 05:56:08', '2020-08-06 05:56:08'),
(26, 'Data barux', 9000, 'tes', 1, '2020-08-06 05:56:10', '2020-08-06 05:56:10'),
(27, 'Data baruxd', 9000, 'tes', 1, '2020-08-06 05:56:15', '2020-08-06 05:56:15'),
(28, 'Data baruxdw', 9000, 'tes', 1, '2020-08-06 05:56:17', '2020-08-06 05:56:17'),
(29, 'Data baruxdwr', 9000, 'tes', 1, '2020-08-06 05:56:18', '2020-08-06 05:56:18'),
(30, 'Data baruxdwrt', 9000, 'tes', 1, '2020-08-06 05:56:20', '2020-08-06 05:56:20'),
(31, 'Data baruxdwrt', 9000, 'tes', 1, '2020-08-06 07:35:11', '2020-08-06 07:35:11'),
(33, 'Yellow Rice', 10000, 'https://sipposjc.netlify.app/assets/images/mobile.png', 2, '2020-08-06 08:55:22', '2020-08-06 12:07:21'),
(34, 'Soto', 20000, 'https://sipposjc.netlify.app/assets/images/list.png', 1, '2020-08-06 12:03:04', '2020-08-06 12:03:04'),
(37, 'Updated', 1233, 'sfdskjd', 4, '2020-08-07 10:49:59', '2020-08-07 10:49:59');

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `name` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Table structure for table `token`
--

CREATE TABLE `token` (
                        `id` int(11) NOT NULL,
                        `token` varchar(256) NOT NULL,
                        `idUser` int(11) NOT NULL,
                        `type` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`id`, `name`) VALUES
(1, 'Boss'),
(2, 'Cashier');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(64) NOT NULL,
  `gender` varchar(64) NOT NULL,
  `email` varchar(64) NOT NULL,
  `username` varchar(64) NOT NULL,
  `password` varchar(255) NOT NULL,
  `roleId` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `histories`
--
ALTER TABLE `histories`
  ADD PRIMARY KEY (`id`);
--

ALTER TABLE `settings`
    ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idCategory` (`idCategory`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `roleId` (`roleId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `histories`
--
ALTER TABLE `histories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

ALTER TABLE `settings`
    MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--

--
-- Constraints for dumped tables
--

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`roleId`) REFERENCES `role` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
