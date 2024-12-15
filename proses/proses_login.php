<?php
session_start();
include '../config.php'; // Mengimpor konfigurasi database

// Cek apakah form login sudah di-submit
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Validasi input kosong
    if (empty($username) || empty($password)) {
        echo "<script>
                alert('Username dan Password wajib diisi!');
                window.location.href = '../admin/login.php';
              </script>";
        exit();
    }

    // Query untuk mencocokkan username dan password
    $query = "SELECT * FROM admin WHERE username = '$username' AND password = '$password'";
    $result = mysqli_query($config, $query);

    // Periksa apakah username dan password cocok
    if ($result && mysqli_num_rows($result) === 1) {
        $row = mysqli_fetch_assoc($result);

        // Set session untuk login
        $_SESSION['id_admin'] = $row['id_admin'];
        $_SESSION['username'] = $row['username'];
        $_SESSION['nama_admin'] = $row['nama_admin']; // Pastikan nama kolom di database benar

        echo "<script>
                alert('Anda Berhasil Login! Selamat datang, " . $row['nama_admin'] . "!');
                window.location.href = '../admin/index.php';
              </script>";
        exit();
    } else {
        echo "<script>
                alert('Username atau Password salah!');
                window.location.href = '../admin/login.php';
              </script>";
    }
} else {
    header("Location: ../login.php");
    exit();
}
?>
