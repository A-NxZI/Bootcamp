// string escaping
console.log('lorem "ipsum"');
console.log("lorem \"ipsum\"");

 //string literal
let sihma = "math";
let numero = 1;
let iorem = sihma + " " + numero ;
console.log(iorem); //<-- type data string
console.log(typeof iorem);

let age = 18;
let name = "alex";
let gai = true;

let bio = `age ${age} name ${name} \ngai? status check ${gai}`
console.log(bio)