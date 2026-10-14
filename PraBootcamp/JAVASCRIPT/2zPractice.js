let tugas = [];

var input = document.getElementById("inp");
let arealist = document.getElementById('als');
let button = document.getElementById("btn");

button.onclick = function(){
    let a = input.value.trim();
    if (a ===""){
        alert("isi tugas terlebih dahulu");
        return;
    }

    tugas.push(a);
    input.value="";

    let isihtml = "<ul class='list-group'>";
    for (i=0 ; i<tugas.length ; i++){
        isihtml += '<li class="list-group-item list-group-item-primary mb-5 rounded">' + tugas[i] + '</li>';
    }

    isihtml += "</ul>";
    arealist.innerHTML = isihtml;
}