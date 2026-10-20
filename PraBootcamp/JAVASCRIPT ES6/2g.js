window.onload = function(){
    //Object literal enchanment

    let sigma = {
        name:"suigma",
        tinggi : 180,
        attack : function(x){
            console.log(`${name} attacking enemy ${x} times`)
        }
    }

    console.log(sigma.attack(5))
    
}