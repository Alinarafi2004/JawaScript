function GetDom() {
let Tem_Val = Number(document.getElementById("T1").value );

if (Tem_Val >= 40 && Tem_Val <= 50 ) {
    document.getElementById("TC1").innerHTML = ("Temperature is burning hot");
}
else if (Tem_Val >=30 && Tem_Val <=40) {
    document.getElementById("TC1").innerHTML = ("Temperature is burning hot");
}
else if (Tem_Val >=20 && Tem_Val <=30) {
    document.getElementById("TC1").innerHTML = ("Temperature is Mild And Pleasant");
}
else if (Tem_Val >=10 && Tem_Val <=20) {
    document.getElementById("TC1").innerHTML = ("Temperature is cold");
}
else if (Tem_Val >=-10 && Tem_Val <=9) {
    document.getElementById("TC1").innerHTML = ("Temperature is freezing cold");
}
else if (Tem_Val >=-11 && Tem_Val <=-55) {
    document.getElementById("TC1").innerHTML= ("Temperature is too low to go outside");
}
else {
    document.getElementById("TC1").innerHTML = ("Temperature is invalid");
}
}