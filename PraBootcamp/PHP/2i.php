<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="2i.php" method="get">
        <label >country name :</label><br>
        <input type="text" name="country"><br>
        <input type="submit" value="capitals">
    </form>
</body>
</html>
<?php
$capitals = array("indonesia" => "jakarta", 
                  "japan" => "tokyo",
                  "germany" => "munich");
    $name = $_GET["country"];

    echo $name;
// foreach($capitals as $capital){
//     echo $capital . "<br>";
// }
?>