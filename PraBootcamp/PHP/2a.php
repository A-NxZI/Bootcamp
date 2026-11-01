<?php
$food="pizza";
$usn= "Skibidi";

$numero= 1;
$quantity=3;

$price=3.99;
$pi=3.14;

$isOnline=true;
$sigma= false;

$total=null;
$total=$price*$quantity;
echo("HI {$usn}<br>");
echo("you have been ordered {$quantity} x {$food}<br>");
echo("your total is \${$total}<br>");
echo("online status : {$isOnline}<br>");
echo("sigma : {$sigma}");