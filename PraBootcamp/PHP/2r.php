<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="2r.php" method="get">
        <label>Email :</label>
        <input type="text" name="eml"><br>
        <label>Password :</label>
        <input type="password" name="psw"><br>
        <input type="submit" name="login" value="login">
    </form>
</body>
</html>
<?php
$password = password_hash("admin123", PASSWORD_DEFAULT);
echo $password. "<br>";
if(isset($_GET["login"])){
    if(!empty($_GET["eml"]) &&
        !empty($_GET["eml"])){
            if(password_verify($_GET["psw"], $password)){
                echo "login sucess";
            }else{
                echo "wrong email/password";
            }
       }else{
        echo "masukan email/password yang valid";
       }
}