//Ex3
function concatp(){
    var p = document.createElement("p");
    var textP = "";
    var aux = [];
    var ps = document.querySelectorAll("p");
    for( let i = 0; i < ps.length; i++){
        aux.push(ps[i].innerHTML);
    }
    textP = aux.reduce((x,y) => x + " " + y);
    p.innerHTML = textP;
    return p;
}
