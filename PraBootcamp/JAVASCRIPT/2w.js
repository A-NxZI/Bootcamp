//While


console.log("START")

let sigma = true;

while(sigma){
    console.log("sigma");
    sigma = false;
}

let angka = 0;
let bool = true;

while(bool){
    console.log("hello world")

    if(angka==10){
        bool = false;    
    }

    angka ++;
}

let loob = true;
let ronde = 1;

while(loob){
    console.log(`kamu ada di ronde ${ronde}`);
    loob = confirm("apakah kamu ingin main lagi?");
    ronde ++;
}

console.log("END")