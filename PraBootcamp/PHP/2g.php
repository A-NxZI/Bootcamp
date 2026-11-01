<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="2j.php">
        <input type="text" name="day">
        <input type="submit" value="idk">
    </form>
</body>
</html>
<?php
$day = $_GET["day"];

switch ($day){
    case "monday":
        echo "i hate monday";
        break;
    case "tuesday":
        echo "i hate tuesday";
        break;
    case "wednesday":
        echo "i hate wednesday";
        break;
    case "thursday":
        echo "i hate thursday";
        break;
    case "friday":
        echo "i hate friday";
        break;
    case "saturday":
        echo "i hate saturday";
        break;
    case "sunday":
        echo "i hate sunday";
        break;
    case "":
        echo "its empty lil bro ";
        break;
    default :
        echo "{$day} is not a day but i hate everyday";
}
?>