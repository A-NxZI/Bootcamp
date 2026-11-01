<?php
$db_server = "localhost";
$db_user   = "root";
$db_pass   = "";
$db_name   = "businessdb";

try {
    $conn = mysqli_connect($db_server, $db_user, $db_pass, $db_name);

} catch (mysqli_sql_exception $e) {
    ?>
    <div style="padding: 20px; font-family: sans-serif; text-align: center; margin-top: 50px;">
        <h2 style="color: #d9534f;">Sistem Sedang Sibuk</h2>
        <p>Kami sedang mengalami kendala koneksi ke server. Mohon coba beberapa saat lagi.</p>
        <button onclick="window.location.reload();" style="padding: 10px 20px; cursor: pointer;">Coba Lagi</button>
    </div>
    <?php
    
    error_log($e->getMessage());
        die(); 
}
?>
