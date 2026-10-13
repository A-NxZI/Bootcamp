let numero1, numero2, operation, arithmetic, result;
document.getElementById("button-equation").onclick = function(){
    numero1=document.getElementById("number-1").value;
    numero2=document.getElementById("number-2").valueAsNumber;
    arithmetic=document.getElementById("aritmatika").value;

    operation = eval(numero1+arithmetic+numero2);
    result=operation;

    document.getElementById("result").textContent = result;
}

let number1, number2, operation1, e, result1;
document.getElementById("button-e").onclick = function(){
    number1 = document.getElementById("numero-1").value;
    numero2 = document.getElementById("numero-2").valueAsNumber;
    e = document.getElementById("e").value;

    operation1 = eval(number1+e+number2);
    result1=operation1;

    document.getElementById("result1").textContent = result1;
}