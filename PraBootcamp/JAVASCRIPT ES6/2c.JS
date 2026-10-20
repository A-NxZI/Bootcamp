window.onload = function(){
//default parameter
    function bio(name="default", age=0 , status=false){ 
        console.log("name :" + name + " age:" + age + " status:" + status);
    }

    bio()
    bio("skibidi", 999, true)
}