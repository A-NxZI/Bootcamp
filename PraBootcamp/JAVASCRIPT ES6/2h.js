window.onload = function(){
    //arrow function

    let sigma = {
        name:"suigma",
        tinggi : 180,
        attack(x){window.setInterval( () =>{
            if(x>0){
                console.log(`${this.name} attacking enemy`)
            }
        }, 1000)
        }
    };

    console.log(sigma.attack(10));


    pecah = (a,b) => a+b;
    console.log(pecah(7,8)) 
    
}