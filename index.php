<?php
include "config.php";

// Query untuk mendapatkan data mobil
$query = "SELECT * FROM mobil WHERE status = 'Tersedia';";
$result = mysqli_query($config, $query);

// Fungsi untuk menghasilkan kode booking otomatis
function generateBookingCode() {
    $randomNumber = rand(1000, 9999); // Membuat angka acak 4 digit
    return "BK-" . $randomNumber;
}

// Contoh penggunaan
$bookingCode = generateBookingCode();
?>

<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Rental 88</title>
  
  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
  
  <!-- SweetAlert2 -->
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
  
  <!-- Animations CSS -->
  <link rel="stylesheet" href="css/animations.css">
  
  <style>
    body {
      font-family: 'Montserrat', sans-serif;
    }
  </style>
</head>
<body class="bg-gray-50">
  <!-- Navbar -->
  <header id="header" class="bg-blue-600 text-white py-6 transition-all duration-300 fixed w-full top-0 z-50 animate-slide-in-down">
    <div class="container mx-auto flex justify-between items-center px-4">
      <h1 class="text-2xl font-bold animate-fade-in">Rental 88</h1>
      <nav class="hidden md:flex space-x-6 animate-fade-in">
        <a href="#home" class="nav-link px-4 hover:text-gray-200 transition duration-300">Beranda</a>
        <a href="#cars" class="nav-link px-4 hover:text-gray-200 transition duration-300">Mobil</a>
        <a href="#contact" class="nav-link px-4 hover:text-gray-200 transition duration-300">Kontak</a>
      </nav>
      <!-- Hamburger Menu -->
      <div class="md:hidden animate-slide-in-left">
        <button id="hamburger-menu" class="text-white focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>
    <!-- Mobile Menu -->
    <div id="mobile-menu" class="md:hidden hidden bg-blue-600 text-white py-4 space-y-2 transition-all duration-300 animate-slide-in-up">
      <a href="#home" class="block text-center nav-link px-4 py-2 hover:bg-blue-700 transition duration-300">Beranda</a>
      <a href="#cars" class="block text-center nav-link px-4 py-2 hover:bg-blue-700 transition duration-300">Mobil</a>
      <a href="#contact" class="block text-center nav-link px-4 py-2 hover:bg-blue-700 transition duration-300">Kontak</a>
    </div>
  </header>

  <!-- Hero Section -->
  <section id="home" class="relative py-20 text-center bg-cover bg-center bg-no-repeat mt-20 animate-fade-in" style="background-image: url('img/MobilBG.jpeg');">
    <div class="absolute inset-0 bg-black bg-opacity-50"></div>
    <div class="relative z-10 px-4">
      <h2 class="text-3xl md:text-5xl font-bold mb-4 text-white animate-zoom-in">Sewa Mobil Mudah dan Cepat</h2>
      <p class="text-lg mb-6 text-white animate-fade-in">Dapatkan mobil terbaik untuk perjalanan Anda dengan harga terjangkau.</p>
      <a href="#cars" class="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition transform hover:scale-105 duration-300 animate-fade-in">Lihat Mobil</a>
    </div>
  </section>

  <!-- Daftar Mobil -->
  <section id="cars" class="py-20">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-10">Daftar Mobil</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <?php while ($row = mysqli_fetch_assoc($result)) : ?>
          <div class="bg-white shadow-md rounded-lg p-6 car-item">
            <h3 class="text-xl font-bold mb-2"><?= $row['merk']; ?> (<?= $row['tahun']; ?>)</h3>
            <img src="img/<?= $row['foto']; ?>" alt="Mobil" class="mb-4 rounded-lg w-full h-48 object-cover">
            <p class="mb-2">Warna: <?= $row['warna']; ?></p>
            <p class="mb-2">Plat: <?= $row['plat']; ?></p>
            <!-- <p class="mb-2">Status: <span class="<?= $row['status'] == 'Tersedia' ? 'text-green-500' : 'text-red-500'; ?>"><?= $row['status']; ?></span></p> -->
            <p class="mb-4">Harga: Rp <?= number_format($row['harga'], 0, ',', '.'); ?> / hari</p>
            <div class="flex gap-2">
              <button type="button" class="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 flex-1" onclick="openModal(<?= $row['id_mobil']; ?>)">Sewa Sekarang</button>
            </div>
          </div>

          <!-- Modal untuk detail mobil -->
          <div id="modal-<?= $row['id_mobil']; ?>" class="hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center px-4">
            <div class="bg-white p-6 rounded-lg w-full max-w-md mx-auto">
              <h3 class="text-xl font-bold mb-4"><?= $row['merk']; ?> (<?= $row['tahun']; ?>)</h3>
              <form>
                <div class="mb-4">
                  <label class="block mb-2 text-sm font-semibold">Merek</label>
                  <input type="text" class="w-full p-3 border rounded-md" value="<?= $row['merk']; ?>" disabled>
                </div>
                <div class="mb-4">
                  <label class="block mb-2 text-sm font-semibold">Warna</label>
                  <input type="text" class="w-full p-3 border rounded-md" value="<?= $row['warna']; ?>" disabled>
                </div>
                <div class="mb-4">
                  <label class="block mb-2 text-sm font-semibold">Plat</label>
                  <input type="text" class="w-full p-3 border rounded-md" value="<?= $row['plat']; ?>" disabled>
                </div>
                <div class="mb-4">
                  <label class="block mb-2 text-sm font-semibold">Tahun</label>
                  <input type="text" class="w-full p-3 border rounded-md" value="<?= $row['tahun']; ?>" disabled>
                </div>
                <div class="mb-4">
                  <label class="block mb-2 text-sm font-semibold">Harga per Hari</label>
                  <input type="text" class="w-full p-3 border rounded-md" value="Rp <?= number_format($row['harga'], 0, ',', '.'); ?> / hari" disabled>
                </div>
                <div class="flex justify-end gap-4">
                  <button type="button" class="py-2 px-4 bg-gray-300 rounded-lg" onclick="closeModal(<?= $row['id_mobil']; ?>)">Tutup</button>
                  <button type="button" class="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700" onclick="openBookingModal(<?= $row['id_mobil']; ?>)">Konfirmasi Sewa</button>
                </div>
              </form>
            </div>
          </div>

          <!-- Modal Formulir Pemesanan -->
          <div id="booking-modal<?= $row['id_mobil']; ?>" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center px-4 hidden z-50">
            <div class="bg-white p-6 rounded-lg w-full max-w-md mx-auto">
              <h3 class="text-xl font-bold mb-4">Formulir Pemesanan</h3>
              <form id="booking-form" method="POST" action="proses/proses_booking.php">
              <input type="hidden" name="id_mobil" value="<?= $row['id_mobil']; ?>" />
              <div class="mb-4">
                  <label for="rental-start-date" class="block mb-2 text-sm font-semibold">Tanggal Mulai Sewa</label>
                  <input type="date" id="rental-start-date" name="rental_start_date" class="w-full p-3 border rounded-md" required>
              </div>
              <div class="mb-4">
                  <label for="rental-end-date" class="block mb-2 text-sm font-semibold">Tanggal Selesai Sewa</label>
                  <input type="date" id="rental-end-date" name="rental_end_date" class="w-full p-3 border rounded-md" required>
              </div>
              <div class="mb-4">
                  <label for="booking-code" class="block mb-2 text-sm font-semibold">Kode Booking</label>
                  <input type="text" id="booking-code" name="booking_code" class="w-full p-3 border rounded-md bg-gray-100" value="<?= $bookingCode; ?>" readonly>
              </div>
              <div class="mb-4">
                  <label for="customer-name" class="block mb-2 text-sm font-semibold">Nama</label>
                  <input type="text" id="customer-name" name="customer_name" class="w-full p-3 border rounded-md" required>
              </div>
              <div class="mb-4">
                  <label for="customer-phone" class="block mb-2 text-sm font-semibold">No. HP</label>
                  <input type="tel" id="customer-phone" name="customer_phone" class="w-full p-3 border rounded-md" required pattern="[0-9]{10,15}" placeholder="08xxxxxxxxxx">
              </div>
              <div class="mb-4">
                  <label for="customer-email" class="block mb-2 text-sm font-semibold">Email</label>
                  <input type="email" id="customer-email" name="customer_email" class="w-full p-3 border rounded-md" required>
              </div>
              <div class="flex justify-end">
                  <button type="button" onclick="closeBookingModal(<?= $row['id_mobil']; ?>)" class="bg-red-600 text-white py-2 px-6 rounded-lg hover:bg-red-700 mr-2">Batal</button>
                  <button type="submit" class="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700">Submit</button>
              </div>
            </form>
            </div>
          </div>
        <?php endwhile; ?>
      </div>
    </div>
  </section>

  <!-- Kontak -->
  <section id="contact" class="bg-gray-100 py-20">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-10">Kontak Kami</h2>
      <form action="https://formspree.io/f/mpwzlwnl" method="POST" class="max-w-xl mx-auto">
        <div class="mb-6">
          <label for="contact-name" class="block mb-2">Nama</label>
          <input type="text" id="contact-name" name="name" class="w-full p-3 border rounded-md">
        </div>
        <div class="mb-6">
          <label for="contact-email" class="block mb-2">Email</label>
          <input type="email" id="contact-email" name="email" class="w-full p-3 border rounded-md">
        </div>
        <div class="mb-6">
          <label for="message" class="block mb-2">Pesan atau Pertanyaan</label>
          <textarea id="message" name="message" rows="5" class="w-full p-3 border rounded-md"></textarea>
        </div>
        <!-- Kotak Saran -->
        <div class="mb-6">
          <label for="suggestion" class="block mb-2">Saran atau Feedback</label>
          <textarea id="suggestion" name="suggestion" rows="5" class="w-full p-3 border rounded-md" placeholder="Berikan saran atau feedback Anda di sini..."></textarea>
        </div>
        <button type="submit" class="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 w-full sm:w-auto">Kirim</button>
      </form>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-blue-600 text-white py-4 text-center">
    <p>&copy; 2024 Kelompok 5. All rights reserved.</p>
  </footer>

  <!-- External Scripts -->
  <script src="js/scripts.js"></script>
</body>
</html>