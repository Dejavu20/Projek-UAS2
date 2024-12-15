-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 15 Des 2024 pada 07.55
-- Versi server: 10.4.24-MariaDB
-- Versi PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rental88`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `admin`
--

CREATE TABLE `admin` (
  `id_admin` int(11) NOT NULL,
  `nama_admin` varchar(255) DEFAULT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `admin`
--

INSERT INTO `admin` (`id_admin`, `nama_admin`, `username`, `password`) VALUES
(1, 'Josclyn', 'admin', 'admin');

-- --------------------------------------------------------

--
-- Struktur dari tabel `booking`
--

CREATE TABLE `booking` (
  `id_booking` int(11) NOT NULL,
  `id_pelanggan` int(11) NOT NULL,
  `id_mobil` int(11) NOT NULL,
  `no_booking` varchar(10) NOT NULL,
  `tgl_booking` timestamp NOT NULL DEFAULT current_timestamp(),
  `tgl_pinjam` date NOT NULL,
  `tgl_kembali` date NOT NULL,
  `subtotal` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `booking`
--

INSERT INTO `booking` (`id_booking`, `id_pelanggan`, `id_mobil`, `no_booking`, `tgl_booking`, `tgl_pinjam`, `tgl_kembali`, `subtotal`) VALUES
(27, 51, 2, 'BK-3126', '2024-12-05 03:08:59', '2024-12-07', '2024-12-08', 100000),
(28, 52, 1, 'BK-2036', '2024-12-05 03:10:16', '2024-12-05', '2024-12-06', 50000),
(29, 53, 1, 'BK-2036', '2024-12-05 03:22:10', '2024-12-05', '2024-12-06', 50000),
(30, 54, 2, 'BK-7936', '2024-12-05 04:00:57', '2024-12-06', '2024-12-07', 100000),
(31, 55, 2, 'BK-1296', '2024-12-13 05:13:28', '2024-12-13', '2024-12-14', 100000),
(32, 56, 1, 'BK-7502', '2024-12-13 05:14:21', '2024-12-13', '2024-12-26', 650000),
(33, 57, 2, 'BK-1298', '2024-12-13 05:16:34', '2024-12-13', '2024-12-19', 600000);

-- --------------------------------------------------------

--
-- Struktur dari tabel `mobil`
--

CREATE TABLE `mobil` (
  `id_mobil` int(11) NOT NULL,
  `foto` varchar(255) NOT NULL,
  `merk` varchar(100) NOT NULL,
  `warna` varchar(50) NOT NULL,
  `plat` varchar(10) NOT NULL,
  `tahun` year(4) NOT NULL,
  `status` enum('Tersedia','Tidak Tersedia') NOT NULL,
  `harga` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `mobil`
--

INSERT INTO `mobil` (`id_mobil`, `foto`, `merk`, `warna`, `plat`, `tahun`, `status`, `harga`) VALUES
(1, 'Toyota-Avanza.png', 'Toyota Avanza', 'Biru', 'KT 1928 BH', 2005, 'Tersedia', 50000),
(2, 'Toyota-Fortuner.jpeg', 'Toyota Fortuner', 'Merah', 'KT 4929 NS', 2006, 'Tersedia', 100000);

-- --------------------------------------------------------

--
-- Struktur dari tabel `pelanggan`
--

CREATE TABLE `pelanggan` (
  `id_plg` int(11) NOT NULL,
  `nama_plg` varchar(255) NOT NULL,
  `no_hp` varchar(11) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `pelanggan`
--

INSERT INTO `pelanggan` (`id_plg`, `nama_plg`, `no_hp`, `email`) VALUES
(25, 'Josclyn', '08189829292', 'josclynjj@gmail.com'),
(26, 'Josclyn', '08189829292', 'syafiraaneh@gmail.com'),
(27, 'Josclyn', '08189829292', 'syafiraaneh@gmail.com'),
(28, 'Josclyn', '08189829292', 'syafiraaneh@gmail.com'),
(29, 'Josclyn', '08189829292', 'syafiraaneh@gmail.com'),
(30, 'Josclyn', '08189829292', 'syafiraaneh@gmail.com'),
(31, 'Josclyn', '08189829292', 'josclynjj@gmail.com'),
(32, 'Josclyn', '08189829292', 'josclynjj@gmail.com'),
(33, 'Josclyn', '08189829292', 'josclynjj@gmail.com'),
(34, 'Josclyn', '08189829292', 'josclynjj@gmail.com'),
(35, 'Josclyn', '08189829292', 'josclynjj@gmail.com'),
(36, 'Josclyn', '08189829292', 'syafiraaneh@gmail.com'),
(37, 'Josclyn', '08189829292', 'syafiraaneh@gmail.com'),
(38, 'Josclyn', '08189829292', 'syafiraaneh@gmail.com'),
(39, 'Josclyn', '08189829292', 'josclynjj@gmail.com'),
(40, 'Josclyn', '08189829292', 'josclynjj@gmail.com'),
(41, 'Josclyn', '08189829292', 'josclynjj@gmail.com'),
(42, 'Josclyn', '08189829292', 'josclynjj@gmail.com'),
(43, 'Josclyn', '08189829292', 'josclynjj@gmail.com'),
(44, 'Josclyn', '08189829292', 'josclynjj@gmail.com'),
(45, 'Josclyn', '08189829292', 'josclynjj@gmail.com'),
(46, 'Josclyn', '08189829292', 'josclynjj@gmail.com'),
(47, 'Josclyn', '08189829292', 'josclynjj@gmail.com'),
(48, 'Josclyn', '08189829292', 'josclynjj@gmail.com'),
(49, 'Josclyn', '08189829292', 'josclynjj@gmail.com'),
(50, 'Josclyn', '08189829292', 'syafiraaneh@gmail.com'),
(51, 'Syafira', '08189829292', 'josclynjj@gmail.com'),
(52, 'Josclyn', '08189829292', 'syafiraaneh@gmail.com'),
(53, 'Josclyn', '08189829292', 'syafiraaneh@gmail.com'),
(54, 'Josclyn', '08189829292', 'syafiraaneh@gmail.com'),
(55, 'Josclyn', '08189829292', 'josclynjj@gmail.com'),
(56, 'Josclyn', '08189829292', 'syafiraaneh@gmail.com'),
(57, 'Josclyn', '08189829292', 'josclynjj@gmail.com');

-- --------------------------------------------------------

--
-- Struktur dari tabel `transaksi`
--

CREATE TABLE `transaksi` (
  `id_transaksi` int(11) NOT NULL,
  `id_admin` int(11) DEFAULT NULL,
  `id_booking` int(11) NOT NULL,
  `tgl_transaksi` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  `denda` int(11) DEFAULT NULL,
  `total_harga` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id_admin`);

--
-- Indeks untuk tabel `booking`
--
ALTER TABLE `booking`
  ADD PRIMARY KEY (`id_booking`),
  ADD KEY `id_pelanggan` (`id_pelanggan`,`id_mobil`),
  ADD KEY `id_mobil` (`id_mobil`);

--
-- Indeks untuk tabel `mobil`
--
ALTER TABLE `mobil`
  ADD PRIMARY KEY (`id_mobil`);

--
-- Indeks untuk tabel `pelanggan`
--
ALTER TABLE `pelanggan`
  ADD PRIMARY KEY (`id_plg`);

--
-- Indeks untuk tabel `transaksi`
--
ALTER TABLE `transaksi`
  ADD PRIMARY KEY (`id_transaksi`),
  ADD KEY `id_admin` (`id_admin`),
  ADD KEY `id_booking` (`id_booking`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `admin`
--
ALTER TABLE `admin`
  MODIFY `id_admin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `booking`
--
ALTER TABLE `booking`
  MODIFY `id_booking` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT untuk tabel `mobil`
--
ALTER TABLE `mobil`
  MODIFY `id_mobil` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `pelanggan`
--
ALTER TABLE `pelanggan`
  MODIFY `id_plg` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT untuk tabel `transaksi`
--
ALTER TABLE `transaksi`
  MODIFY `id_transaksi` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `booking`
--
ALTER TABLE `booking`
  ADD CONSTRAINT `booking_ibfk_1` FOREIGN KEY (`id_pelanggan`) REFERENCES `pelanggan` (`id_plg`),
  ADD CONSTRAINT `booking_ibfk_2` FOREIGN KEY (`id_mobil`) REFERENCES `mobil` (`id_mobil`);

--
-- Ketidakleluasaan untuk tabel `transaksi`
--
ALTER TABLE `transaksi`
  ADD CONSTRAINT `transaksi_ibfk_2` FOREIGN KEY (`id_admin`) REFERENCES `admin` (`id_admin`),
  ADD CONSTRAINT `transaksi_ibfk_3` FOREIGN KEY (`id_booking`) REFERENCES `booking` (`id_booking`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
