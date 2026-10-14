let todoArray = []

let button = document.getElementById("btn");
let input  = document.getElementById("inp");
let area   = document.getElementById("als");

function tambah(){
    let vld = input.value.trim();
    if(vld===""){
        alert("masukan skibidi terlebih dahulu");
        return;
    };

    todoArray.push(vld);
    input.value="";

    renderList();
}

function hapusTugas(stress){
    todoArray.splice(stress,1)
    renderList();
}

function renderList(){

    if (todoArray.length === 0){
        area.innerHTML = "<p>Tidak ada tugas hari ini..</p>"
        return;
    }

    let isiHtml = ("<ul class='list-group'>");

    for(let i=0 ; i < todoArray.length ; i++){
        isiHtml += `
        <li class="list-group-item list-group-item-primary d-flex justify-content-between align-items-center"> 
            <span> ${todoArray[i]} </span> 
            <button onclick='hapusTugas(${i})' class='btn btn-danger btn-sm'>hapus</button>
        </li> `
    }

    isiHtml += ("</ul>");
    area.innerHTML=isiHtml;

}

button.onclick = tambah;