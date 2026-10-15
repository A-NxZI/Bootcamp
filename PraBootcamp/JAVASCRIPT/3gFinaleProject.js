// Data dummy array
let produk = ["kopi_hitam", "kopi_susu", "stmj", "gorengan", "roti"]; //DONE
let harga  = [4000, 4000, 10000, 1000, 3000 ]; //DONE

// halaman utama
let halamanUtama  = document.getElementById("halaman-utama"); //DONE

let areaKeranjang = document.getElementById("area-keranjang"); //DONE
let totalBayar    = document.getElementById("total-harga"); //DONE
let belanjaan     = [];

let areaMenu      = document.getElementById("area-menu"); //DONE

// Halaman Stroke
let detailStroke  = document.getElementById("detail-stroke"); //DONE
let halamanStroke = document.getElementById("halaman-stroke"); //DONE


//===================================
//INIIII FUNGSIII HAPUSSS (doneee)
//===================================

function fungsiHapus(index){
    belanjaan.splice(index,1)   
    gtauNama();
}

//===================================
//INIIII FUNGSII TAMBAAHHH (doneee)
//===================================

function fungsiTambah(index){
    belanjaan.push(index);
    gtauNama();
}

//--------------------
//variabel anak hilang
//--------------------
const total = belanjaan.reduce((accumulator, itemBelanjaan) => {
    return accumulator + (harga[itemBelanjaan] || 0);
}, 0);
    
//===================================
// (doneeee)
//===================================
function gtauNama(){
    if (belanjaan.length === 0){
        areaKeranjang.innerHTML = "<p> keranjang masih kosong </p>";
        totalBayar.innerHTML = "Rp.0";
        return;
    }

    let isiKeranjang = ("<ul class='list-group'>");

    for (i=0 ; i<belanjaan.length ; i++){

        let rill = belanjaan[i];

        isiKeranjang += `
        <li class="list-group-item list-group-item-primary d-flex justify-content-between align-items-center">
            <span> ${produk[rill]} Rp.${harga[rill]} </span>
            <button onclick='fungsiHapus(${i})'class"btn btn-success btn=danger"> - </button>
        </li>`
    }


    const total = belanjaan.reduce((accumulator, itemBelanjaan) => {
    return accumulator + (harga[itemBelanjaan] || 0);}, 0);

    totalBayar.innerHTML = `Rp.${total}`

    isiKeranjang += ("</ul>");
    areaKeranjang.innerHTML = isiKeranjang;

}

//===================================
//INIIII PROSEESSS CO YAGN DI HALAMAN UTAMAA (doneeee)
//===================================

function prosesCheckout(){

    if (belanjaan.length === 0){
        alert("tambah belanjaan terlebih dahulu");
        return;
    }

    let skibidi = "<ul class=list-group>"


    for(i=0 ; i<belanjaan.length ; i++){

        let toilet = belanjaan[i];

        skibidi += `
        <li class="list-group-item list-group-item-primary d-flex justify-content-between align-items-center">
            <span>${produk[toilet]} Rp.${harga[toilet]}</span>
        </li>
        `
    }

    const total = belanjaan.reduce((accumulator, itemBelanjaan) => {
    return accumulator + (harga[itemBelanjaan] || 0);}, 0);

    skibidi += `<li class="list-group-item list-group-item-primary d-flex justify-content-between align-items-center">Total pembelianya adalah Rp.${total}</li></ul>`

    detailStroke.innerHTML = skibidi
    halamanUtama.classList.add("d-none");  
    halamanStroke.classList.remove("d-none");

    belanjaan = []; 
}

//===================================
//INIIII PASSS PENCETTTT PSEANANANN SELEASIIII (doneeee)
//===================================
function pesananSelesai(){ 
    halamanStroke.classList.add("d-none");
    halamanUtama.classList.remove("d-none");

    gtauNama();
}

//===================================
//INIIII RENDEERRR LISSTSTTSTSTTSTST (doneee)
//===================================

function renderlist(){

    let isiProduk = ("<ul class='list-group'>");

    for(let i=0 ; i<produk.length ; i++){
        isiProduk += `
        <li class="list-group-item list-group-item-primary d-flex justify-content-between align-items-center">
        <span> ${produk[i]} Rp.${harga[i]} </span>
        <button onclick='fungsiTambah(${i})'class"btn btn-success btn=sm"> + </button>
        </li>`
    }

    isiProduk += "</ul>"
    areaMenu.innerHTML = isiProduk;
}

renderlist();
gtauNama();