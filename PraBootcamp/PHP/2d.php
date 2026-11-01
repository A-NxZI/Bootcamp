<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="2d.php" method="get">
        <label>x</label>
        <input type="text" name="x"><br>
        <label>y</label>
        <input type="text" name="y"><br>
        <label>z</label>
        <input type="text" name="z"><br>
        <input type="submit" value="function">
    </form>
</body>
</html>
<?php
$x = $_GET["x"];
$y = $_GET["y"];
$z = $_GET["z"];

// echo abs($x);
// echo round($x);
// echo ceil($x);
// echo sqrt($x);
// echo pow($x, $y);
// echo max($x, $y, $z);
// echo min($x, $y, $z);
// echo pi();
// echo rand(1, 12);