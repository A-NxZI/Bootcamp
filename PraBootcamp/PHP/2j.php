<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="2j.php" method="get">
        <label> choose</label> <br>
        <input name="card" type="radio" value="card 1">
        <label>card 1</label><br>
        <input name="card" type="radio" value="card 2">
        <label>card 2</label><br>
        <input name="card" type="radio" value="card 3">
        <label>card 3</label><br>
        <input type="submit" name="select" value="select">
    </form>
</body>
</html>
<?php
if(isset($_GET["select"])){
    $variable = null;

    if(isset($_GET["card"])){
        $variable = $_GET["card"];
    }
    switch($variable){
        case "card 1" :
            echo "card 1 selected";
            break;
        case "card 2" :
            echo "card 2 selected";
            break;
        case "card 3" :
            echo "card 3 selected";
            break;
        default : 
            echo "select card";
    }
} 
?>