// string operation
// 1. at index
let name = "Omori";
let dataChar = name.charAt(0)
console.log(dataChar)
dataChar = name.charAt(1)
console.log(dataChar)
dataChar = name.charAt(2)
console.log(dataChar)
dataChar = name.charAt(3)
console.log(dataChar)
dataChar = name.charAt(4)
console.log(dataChar)
dataChar = name.charAt(5)
console.log(dataChar)
dataChar = name.charAt(6)
console.log(dataChar)

// 2. connect string
let firstName = "Elliot ";
let lastName = "Alderson ";
let fullName = firstName.concat (lastName, "Peak");
console.log(fullName);

// 3. mengambil index kemunculan pertama
let sayMyName = "Heisenberg";
console.log(sayMyName.indexOf('e'));

//4. substring
console.log(sayMyName.substring(0,6));

// 5. slice

let who = sayMyName.slice(6,10)
console.log(who)

// 6. replace
fullName = fullName.replace('Elliot', 'Aldy');
console.log(fullName)

// 7. Tolower
let syfm = sayMyName.toLowerCase()
console.log(syfm)

// 8. uppercase
let sybau = sayMyName.toUpperCase()
console.log(sybau)

// 9. extract
let sum = "80.5"; //<--string
console.log(parseInt(sum)) //<-- integer
console.log(parseFloat(sum)) //<-- float