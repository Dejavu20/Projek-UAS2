<?php
$config = mysqli_connect("localhost", "root", "", "rental88");

// Check connection
if (mysqli_connect_errno()){  
    echo "Koneksi database gagal : " , mysqli_connect_error();
};
?>