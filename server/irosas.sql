-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th12 09, 2022 lúc 04:55 AM
-- Phiên bản máy phục vụ: 10.4.22-MariaDB
-- Phiên bản PHP: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `irosas`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `accounts`
--

CREATE TABLE `accounts` (
  `id` int(100) NOT NULL,
  `type` int(3) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `address` varchar(255) NOT NULL,
  `photo` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `accounts`
--

INSERT INTO `accounts` (`id`, `type`, `email`, `password`, `name`, `phone`, `address`, `photo`) VALUES
(1, 1, 'admin@gmail.com', 'admin1', 'Loc Minh Hieu', '0837128983', 'Dai hoc bach khoa TPHCM', '/images/profile_pic.jpg'),
(8, 2, 'staff@gmail.com', '123', 'Toan', '0183123712', 'dai hoc bach khoa', '/images/staff_profile.jpg'),
(9, 3, 'customer@gmail.com', '123', '', '', '', '/images/customer_profile.png'),
(10, 2, 'staff2@gmail.com', '12345678', 'Tuan', ' ', ' ', '/images/staff_pic.jpg');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `quantity` int(11) NOT NULL,
  `photo` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `categories`
--

INSERT INTO `categories` (`id`, `name`, `quantity`, `photo`) VALUES
(1, 'Coffee', 0, '/images/1.jpg'),
(2, 'Tea', 0, '/images/2.jpg'),
(3, 'Ice Blended', 0, '/images/3.jpg'),
(4, 'Chocolate', 0, '/images/4.jpg'),
(5, 'Fruit Juice', 0, '/images/5.jpg'),
(6, 'Milk Tea', 0, '/images/6.jpg'),
(7, 'Cocktail', 0, '/images/7.jpg'),
(8, 'Shakes', 0, '/images/8.jpg'),
(9, 'Soft Drink', 0, '/images/9.jpg');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `drinks`
--

CREATE TABLE `drinks` (
  `id` int(11) NOT NULL,
  `category` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `description` varchar(255) NOT NULL,
  `photo` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `drinks`
--

INSERT INTO `drinks` (`id`, `category`, `name`, `price`, `description`, `photo`) VALUES
(1, 1, 'Iced Milk Coffee', 20000, 'Cà phê sữa đá', '/assets/image/icecoffee.png'),
(2, 1, 'Latte', 19000, '', '/assets/image/latte.png'),
(3, 1, 'Americano', 20000, '', '/assets/image/americano.png'),
(4, 1, 'Capuchino', 22000, '', '/assets/image/capuchino.png'),
(5, 1, 'Black Coffee', 15000, '', '/assets/image/blackcoffee.png'),
(6, 2, 'Hot Fresh Tea', 17000, '', '/assets/image/freshtea.png'),
(7, 3, 'Matcha Ice Blended', 39000, '', '/assets/image/matcha.png'),
(8, 4, 'Hot Chocolate', 27000, '', '/assets/image/chocolate.png'),
(9, 5, 'Honey Orange Juice', 35000, '', '/assets/image/orangejuice.png'),
(10, 5, 'Hot Ginger Juice', 29000, '', '/assets/image/gingerjuice.png'),
(11, 6, 'Thai Tea', 25000, '', '/assets/image/thaitea.png'),
(12, 7, 'Strawberry Cocktail', 39000, '', '/assets/image/strawberry.png'),
(23, 1, 'Cagegege', 1, '', '/assets/image/americano.png'),
(0, 1, 'Cafe den', 1, '', '/assets/image/icecoffee.png');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `drink_in_order`
--

CREATE TABLE `drink_in_order` (
  `id` int(11) NOT NULL,
  `drink_id` int(11) NOT NULL,
  `id_order` int(11) NOT NULL,
  `quantity` int(11) DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL,
  `total` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `drink_in_order`
--

INSERT INTO `drink_in_order` (`id`, `drink_id`, `id_order`, `quantity`, `note`, `total`) VALUES
(1, 5, 1, 4, NULL, 60000);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orders`
--

CREATE TABLE `orders` (
  `id_order` int(11) NOT NULL,
  `name_customer` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `status` varchar(255) NOT NULL,
  `total` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `orders`
--

INSERT INTO `orders` (`id_order`, `name_customer`, `phone_number`, `address`, `status`, `total`) VALUES
(1, 'Nguyen Van A', '0714612012312', '32 Quang Trung', 'Chờ xác nhận', 120),
(3, 'le van a', '0183123712', '56 dhua ', 'Chờ xác nhận', NULL),
(4, 'sadad', '124211', '41241', 'Chờ xác nhận', NULL),
(5, 'Le van c', '0123912931', '31231241421', 'Chờ xác nhận', 0),
(6, 'Le van h', '0123912931', '31231241421', 'Chờ xác nhận', 0),
(7, 'le van a', '0183123712', '56 dhua1w2312', 'Chờ xác nhận', 0),
(8, 'le van a', '0183123712', '56 dhua1w2312', 'Chờ xác nhận', 0),
(9, 'Le van h', '0123912931', '31231241421', 'Chờ xác nhận', 0);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `drink_in_order`
--
ALTER TABLE `drink_in_order`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id_order`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `accounts`
--
ALTER TABLE `accounts`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT cho bảng `drink_in_order`
--
ALTER TABLE `drink_in_order`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `orders`
--
ALTER TABLE `orders`
  MODIFY `id_order` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
