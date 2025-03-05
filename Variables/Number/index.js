function variables() {
    let a = Number(document.getElementById("A_1").value);
    let b = Number(document.getElementById("B_1").value);
    let c = a+b;
    document.getElementById("Var_1").innerHTML = ("the value is " + c);
    alert("the value is " + c);
}