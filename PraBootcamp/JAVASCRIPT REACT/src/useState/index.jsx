import React, { useState } from "react";

function App(){
  const total=100;
  const [discount, setDiscount] = useState(total);
  const [voucher,setVoucher] = useState(1);
  const [customer, setCustomer] = useState({ memberType: "Reguler", 
                                             discountPercent: 0, 
                                             isActive: true })

  function handleVoucher(event){
    setVoucher(event.target.checked? voucher-1 : voucher+1);
  }

  function handleDiscountVoucher(event){
    setDiscount(event.target.checked? total-5: total);
  }

  function handleCustomer(){
    setCustomer({...customer, memberType: "VIP", discountPercent: 15});
    
    (alert("kamu sekarang vip"));
  }

  return(
    <div>
      <p>class : {customer.memberType}</p>
      <button value={customer.memberType} onClick={handleCustomer}>Upgrade Vip</button>
      <hr />
      <p>total: {discount-(discount*(customer.discountPercent/100))}</p>
      <p>voucher: {voucher}</p>
      <input type="checkBox" onChange={(value)=>{handleVoucher(value), handleDiscountVoucher(value)}} />
    </div>

  )
}

// 3. State Array, Map, dan Filter (Materi Video 3)

// • Buat state berbentuk Array of Objects bernama cartItems untuk menyimpan daftar belanjaan.
// 	• Initial state berisi beberapa barang, contoh:
// [{ id: 1, name: "Kopi", price: 15000 }, { id: 2, name: "Roti", price: 10000 }]
// • Fitur Tambah (Render via Input): Buat form input teks untuk "Nama Barang" dan input angka untuk "Harga", lalu sebuah tombol "Tambah ke Keranjang". Ketika diklik, barang baru akan masuk ke dalam array cartItems.
// • Fitur List (Render via Map): Tampilkan daftar barang belanjaan tersebut menggunakan metode .map(). Jangan lupa berikan atribut key yang unik (gunakan id barang).
// • Fitur Hapus (Render via Filter): Di samping setiap nama barang pada daftar, berikan tombol "Hapus". Jika tombol diklik, barang tersebut akan terhapus dari daftar keranjang belanja menggunakan metode .filter().

export default App;