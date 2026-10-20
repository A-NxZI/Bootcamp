window.onload = function(){
//The spread operator

    let array = ["sigma", "ohio"];
    let ari = [1,2,3];

    console.log(...ari)
    console.log(...array)

    let num = [1,2,3,4]

    function ligma(a, b, c){
        console.log(a+b+c)
    }

    ligma(num)
    ligma(...num)
}