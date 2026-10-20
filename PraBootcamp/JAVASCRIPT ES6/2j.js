window.onload = function(){
    //generators
    function* generator(){
        yield "skbidi";
        yield "toilet";
        yield "sigma";
        return "done";
    }

    let cont = generator();

    console.log(cont.next());
    console.log(cont.next());
    console.log(cont.next());
    console.log(cont.next());
}