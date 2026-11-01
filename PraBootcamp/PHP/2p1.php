<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    halaman utama
    <form action="2p1.php" method="post">
        <input type="submit" value="logout" name="logout">
    </form>
</body>
</html>
<?php
echo $_SESSION["email"] . "<br>";
echo $_SESSION["password"];
if(isset($_POST["logout"])){
    session_destroy();
    header("Location: 2p.php");
}
?>