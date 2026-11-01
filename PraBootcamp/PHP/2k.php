<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="2k.php" method="get">
        <input type="text" name="nama">
        <input type="submit">
    </form>
</body>
</html>
<?php 
$name = $_GET["nama"];
    if(!empty($_GET["nama"])){
        echo "namamu adalah $name";
    }else{
        echo "kosong";
    }
?>