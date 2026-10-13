// numbers 64-bit 2^1064 -2^1064

let int = 10; //<== bilangan bulat
let float = 10.5; //<== float
let bigInt = 1234567891234567899n;
console.log(typeof bigInt);

//mengubah bilangan bulat
let numero = 1.5;
let numeroInt = parseInt(numero);
console.log(numeroInt);

//bilangan float
let a = "0.99hhh"; //<== ignore the string behind
let aFloat = parseFloat(a);
console.log(aFloat)

//NaN
let b = "a 99"; 
let bc = parseInt(b);
console.log(bc);

// example
let c = "100";
let tax = 9;
let total = parseInt(c) + tax;
console.log(total);