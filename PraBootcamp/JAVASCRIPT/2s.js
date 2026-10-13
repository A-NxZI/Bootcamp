// metode 1 1
let alphabetA = "a";
let alphabetB = "b";
let alphabetC = "c";

// array
let alphabets = ["a", "b", "c", "d", "e"];
console.log(alphabets);

console.log(`join ==> ${alphabets.join('-')}`);

alphabets.pop();
console.log(alphabets.join('+'));
alphabets.pop(); 
console.log(alphabets.join('='));
alphabets.shift();
console.log(alphabets.join('-'));
alphabets.unshift("a");
console.log(alphabets.join('-'));


