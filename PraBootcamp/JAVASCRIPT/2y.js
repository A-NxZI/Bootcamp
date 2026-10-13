//loopinhg array

let fcb = ["olise", "kane", "diaz", "neuer", "musiala"]

for( i=0 ; i<fcb.length ; i++ ){
    console.log(`${i+1}. ${fcb[i]}`)
}

for(  i=0 ; i<fcb.length ; i++ ){
    console.log(`${i+1}. ${fcb[i]}`)

    if(fcb[i]=="diaz"){
        break;
    }
}

for(  i=0 ; i<fcb.length ; i++ ){
    console.log(`${i+1}. ${fcb[i]}`)

    if(fcb[i]=="diaz"){
        continue;
    }
}