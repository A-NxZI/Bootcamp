window.onload = function(){
    //sets
    let sigma = new Set();

    sigma.add("skibidi").add("toilet").add("ohio").add("rizzler")
    sigma.delete("ohio")
    console.log(sigma.has("ohio"))

    console.log(...sigma); 
    sigma.clear()
    console.log(sigma)

    let sugma = [1, 2, 3, 4];

    refinedSugma = new Set(sugma)

    console.log(...refinedSugma)
}