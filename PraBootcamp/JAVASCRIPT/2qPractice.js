function calculate(){

    const number1=parseFloat(document.getElementById("number-1").value); 
    const number2=parseFloat(document.getElementById("number-2").value);
    const op=document.getElementById("operation").value.trim();
    let result;

    if (isNaN(number1) || isNaN(number2)){
        document.getElementById("result").textContent = "introducir una operación válida";
        return;
    }
    
    if(op==="+"){
        result = number1+number2;
    }else if(op==="-"){
        result = number1-number2;
    }else if(op==="*"){
        result = number1*number2;
    }else if(op==="/"){
        if(number2===0){
            result="infinidad";
        }else{
            result = number1/number2;
        }
    }else if(op!=="+" || "-" || "*" || "/"){
        document.getElementById("result").textContent = "tidak valid";
    }

    document.getElementById("result").textContent = result;
}