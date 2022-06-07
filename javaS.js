
function add(x , y){
    var z = Number(x)+Number(y);
    return z;
}

function sqr(x){
    var y = Number(x)
    var power = Math.pow(y,2)
    return power
}

function sqrRoot(x){
    var y = Number(x)
    var root = Math.sqrt(y)
    return root

}

document.getElementById("Get C").onclick = function(){
    var A = document.getElementById("Ainput").value;
    var B = document.getElementById("Binput").value;
    var Csq = add(sqr(A),sqr(B));
    document.getElementById("p2").innerHTML = sqrRoot(Csq);

}
