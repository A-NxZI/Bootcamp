let fcb1 = ["kroos", "muller", "neuer"];
let fcb2 = ["olise", "kane", "diaz"]
let fcb3 = ["laimer", "uppamecano", "davies"]

// 1. connecting index
let fcb_at = fcb1.concat(fcb2, fcb3);
console.log(fcb_at.join('-'))

// 2. cheking array value
console.log(fcb_at.indexOf('olise'))

// 3. Chek array position
console.log(fcb_at.at(8, 1)) //<== hanya membaca urutan yang depan saja
let fcb_position= fcb_at.at(3, 8)
console.log(fcb_position)

// 4. sorting array
console.log(fcb_at.sort())
console.log(fcb_at.reverse())