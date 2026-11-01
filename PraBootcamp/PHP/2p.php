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
    <form action="2p.php" method="post">
        <label>Email :</label> <br>
        <input type="text" name="eml"> <br>
        <label>Password :</label> <br>
        <input type="password" name="psw"> <br>
        <input type="submit" name="login">
    </form>
</body>
</html>
<?php
if(isset($_POST["login"])){

    if(!empty($_POST["eml"]) &&
        !empty($_POST["psw"])){

        $_SESSION["email"] = $_POST["eml"];
        $_SESSION["password"] = $_POST["psw"];
        header("Location: 2p1.php");
    }else{
        echo "loginkan dulu le";
    }
}