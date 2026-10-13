let number1, number2, equals;

document.getElementById("button-equation").onclick = function(){
    number1=document.getElementById("number-1").value;
    number2=document.getElementById("number-2").valueAsNumber;
    console.log(typeof number1);
    console.log(typeof number2);
    equals = parseFloat(number1) + number2;

    document.getElementById("equations").textContent = equals;
}