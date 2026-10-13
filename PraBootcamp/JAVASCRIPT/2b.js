// variable let
let age = 14;
console.log(age);
age = "apa";
console.log(age)

// variable var
var hardware = "mouse";
console.log(hardware);
hardware = 14;
console.log(hardware);
software = "operating sistem"; //<-- var
console.log(software);

// variable const
const food = "noodles";
console.log(food);
// food = "chicken noodles"; // <--

//scope dengan let
let number = 100;
{
    let number = 200;
    {
        let number = 50;
        console.log(number);
    }
    console.log(number) 
}
console.log(number); // let di dalam kurung kurawal tidak bisa diakses diluar kurung kurawal

// var
var numero = 1;
{
    numero =2;
}
console.log(numero) //<-- mengakses nilai yang paling baru walau ada kurung kurawal
