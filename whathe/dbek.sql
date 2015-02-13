-- phpMyAdmin SQL Dump
-- version 4.2.7.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Feb 06, 2015 at 02:09 PM
-- Server version: 5.6.20
-- PHP Version: 5.5.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `dbek`
--

-- --------------------------------------------------------

--
-- Table structure for table `kategori`
--

CREATE TABLE IF NOT EXISTS `kategori` (
  `id_kat` varchar(5) NOT NULL,
  `Namakat` varchar(35) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `kategori`
--

INSERT INTO `kategori` (`id_kat`, `Namakat`) VALUES
('0', 'T-Shirt'),
('1', 'Pants'),
('2', 'Jackets'),
('3', 'Blouse'),
('4', 'Skirt');

-- --------------------------------------------------------

--
-- Table structure for table `pembelian`
--

CREATE TABLE IF NOT EXISTS `pembelian` (
  `tglpembelian` varchar(25) NOT NULL,
  `id` varchar(25) NOT NULL,
  `nama` varchar(25) NOT NULL,
  `qty` int(11) NOT NULL,
  `total` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pembelian`
--

INSERT INTO `pembelian` (`tglpembelian`, `id`, `nama`, `qty`, `total`) VALUES
('15-02-06', 'Skinny Pant', 'PS001', 1, 145000),
('15-02-06', 'Varsity', 'JM001', 1, 115000),
('15-02-06', 'North Face Jacket Pink', 'JW001', 1, 129000),
('15-02-06', 'Velvet Skirt', 'S0001', 2, 172000);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE IF NOT EXISTS `product` (
  `id_pro` varchar(5) NOT NULL,
  `id_kat` varchar(5) NOT NULL,
  `Nama` varchar(35) NOT NULL,
  `Harga` decimal(10,0) NOT NULL,
  `Qty` int(11) NOT NULL,
  `Deskripsi` varchar(150) NOT NULL,
  `Image` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id_pro`, `id_kat`, `Nama`, `Harga`, `Qty`, `Deskripsi`, `Image`) VALUES
('B0001', '3', 'Grey Lace Peplum', '78000', 14, 'Nyaman dan tebal', 'images/blouse.jpg'),
('JM001', '2', 'Varsity', '115000', 35, 'Varsity bahan J-Flece tebal', 'images/jaket1.jpg'),
('JW001', '2', 'North Face Jacket Pink', '129000', 12, 'Hangat dan nyaman bahan Parasut tebal', 'images/jaket2.jpg'),
('PS001', '1', 'Skinny Pant', '145000', 6, 'Chino Skiny Pant Green Army', 'images/pants.jpg'),
('S0001', '4', 'Velvet Skirt', '86000', 11, 'Skirt khaki', 'images/skirt.jpg'),
('T0001', '0', 'All day green', '90000', 20, 'T-Shirt nyaman 30s', 'images/tshirt.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `kategori`
--
ALTER TABLE `kategori`
 ADD PRIMARY KEY (`id_kat`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
 ADD PRIMARY KEY (`id_pro`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
