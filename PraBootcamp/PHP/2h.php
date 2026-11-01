<?php
$fruits = array("apple", "grape", "orange");
$fruits[0] = "pinaple";
array_push($fruits, "apple");
array_pop($fruits);
array_shift($fruits);
// $newvariable = array_reverse($fruits);
// echo count($fruits);

foreach($fruits as $fruit => $value){
    echo $fruit . "<br>";
}