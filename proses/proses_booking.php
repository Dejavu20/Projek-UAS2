<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Booking Confirmation</title>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <style>
    body {
        font-family: 'Montserrat', sans-serif;
    }
    </style>
</head>
<body>
<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    include "../config.php";

    // Ambil data dari form
    $id_mobil = $_POST['id_mobil'];
    $rental_start_date = $_POST['rental_start_date'];
    $rental_end_date = $_POST['rental_end_date'];
    $booking_code = $_POST['booking_code'];
    $customer_name = $_POST['customer_name'];
    $customer_phone = $_POST['customer_phone'];
    $customer_email = $_POST['customer_email'];

    date_default_timezone_set("Singapore");
    $waktu = date('H:i');

    // Ambil harga mobil dari database
    $getMobilQuery = "SELECT harga FROM mobil WHERE id_mobil = '$id_mobil'";
    $mobilResult = mysqli_query($config, $getMobilQuery);

    if ($mobilResult && mysqli_num_rows($mobilResult) > 0) {
        $mobilData = mysqli_fetch_assoc($mobilResult);
        $harga_mobil = $mobilData['harga'];

        $start_date = new DateTime($rental_start_date);
        $end_date = new DateTime($rental_end_date);
        $selisih_hari = $start_date->diff($end_date)->days;

        $subtotal = $selisih_hari * $harga_mobil;

        $insertCustomerQuery = "INSERT INTO pelanggan (nama_plg, no_hp, email) 
                                VALUES ('$customer_name', '$customer_phone', '$customer_email')";

        if (mysqli_query($config, $insertCustomerQuery)) {
            $customer_id = mysqli_insert_id($config);

            $insertTransactionQuery = "INSERT INTO booking (id_pelanggan, id_mobil, no_booking, tgl_booking, tgl_pinjam, tgl_kembali, subtotal) 
                                       VALUES ($customer_id, '$id_mobil', '$booking_code', NOW(), '$rental_start_date', '$rental_end_date', $subtotal)";

            if (mysqli_query($config, $insertTransactionQuery)) {
                $updateMobilStatusQuery = "UPDATE mobil SET status = 'Tidak Tersedia' WHERE id_mobil = '$id_mobil'";
                if (mysqli_query($config, $updateMobilStatusQuery)) {
                    echo "<script>
                            Swal.fire({
                                icon: 'success',
                                title: 'Sukses!',
                                text: 'Booking berhasil dibuat.',
                                confirmButtonText: 'OK'
                            }).then(() => {
                                window.location.href = '../index.php';
                            });
                          </script>";
                } else {
                    echo "<script>
                            Swal.fire({
                                icon: 'warning',
                                title: 'Gagal Memperbarui!',
                                text: 'Booking berhasil, tetapi gagal memperbarui status mobil.',
                                confirmButtonText: 'OK'
                            }).then(() => {
                                window.history.back();
                            });
                          </script>";
                }
            } else {
                echo "<script>
                        Swal.fire({
                            icon: 'error',
                            title: 'Gagal!',
                            text: 'Gagal menyimpan Booking!',
                            confirmButtonText: 'Coba Lagi'
                        }).then(() => {
                            window.history.back();
                        });
                      </script>";
            }
        } else {
            echo "<script>
                    Swal.fire({
                        icon: 'error',
                        title: 'Gagal!',
                        text: 'Gagal menyimpan data pelanggan!',
                        confirmButtonText: 'Coba Lagi'
                    }).then(() => {
                        window.history.back();
                    });
                  </script>";
        }
    } else {
        echo "<script>
                Swal.fire({
                    icon: 'error',
                    title: 'Gagal!',
                    text: 'Gagal mengambil data mobil!',
                    confirmButtonText: 'Coba Lagi'
                }).then(() => {
                    window.history.back();
                });
              </script>";
    }

    mysqli_close($config);
}
?>
</body>
</html>
