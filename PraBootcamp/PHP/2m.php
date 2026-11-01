<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="2m.php" method="post">
        <label>Username :</label> <br>
        <input type="text" name="usn"> <br>
        <label>id :</label> <br>
        <input type="text" name="ids"> <br>
        <label>email :</label> <br>
        <input type="text" name="eml"> <br>
        <input type="submit" value="login" name="login">
    </form>
</body>
</html>
<?php
if($_POST["login"]){
    filter_input(INPUT_POST, "usn", FILTER_SANITIZE_STRING);
    $usn=$_POST["usn"];

    filter_input(INPUT_POST, "eml", 
                FILTER_VALIDATE_EMAIL);

    filter_input(INPUT_POST, "ids", 
                FILTER_VALIDATE_INT);

    if(!empty($_POST["usn"])){
        echo "login sucess, halo $usn";
    }else{
        echo "masukan nama yang benar <br>";
    }

    if(empty($_POST["eml"])){
        echo "email tidak valid";
    }

    if(empty($_POST["ids"])){
        echo "id harus berupa angka";
    }
}