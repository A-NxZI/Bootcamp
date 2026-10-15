// Penggunaan let (Block Scope)
let x = 10;
if (true) {
  let x = 20; // Variabel yang berbeda dari x di luar
  console.log(x); // Output: 20
}
console.log(x); // Output: 10
