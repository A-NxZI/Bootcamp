<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="2c.php" method="post">
        <label>username :</label> <br />
        <input type="input" name="usn"><br />
        <label>password :</label><br />
        <input type="password" name="password"><br />
        <input type="submit" value="login">
    </form>
    <form action="2c.php" method="get">
        <label>quantity :</label> <br>
        <input type="number" name="quantity">
        <input type="submit" value="total">
    </form>
</body>
</html>
<?php

echo $_POST["usn"];
echo $_POST["password"];

$quantity= $_GET["quantity"];
$price=3.99;
$total=null;
$total=$price*$quantity;
echo "you ordered {$quantity}x pizza/s<br>";
echo "total payment is \${$total}"
?>