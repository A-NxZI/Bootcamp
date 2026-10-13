let fcb = ["kroos", "muller", "neuer"];

// join
console.log(`bayern munich :${fcb.join('-')}`)

//splice
let madrid = fcb.splice(0,1);
console.log(madrid.join('-'));
console.log(fcb.join('-')); 
// madrid mengambil pemain bayern munchen yang mulai dari 0 dan kurang dari 1

//splice adding
fcb.splice(1,0, "olise"); //<== menambahkan olise ke index
console.log(fcb.join('-')); 

//splice copy
fcb2026 = fcb.slice(1,3);
console.log(`bayern 2026 : ${fcb2026.join('-')}`);
// fcb 2026 mengambil potongan fcb mulai dari index 1 dan kurang dari index 3
console.log(`bayern 2024 : ${fcb.join('-')}`);
