function Get_Dom() {
    let temp = Number(document.getElementById("TempCal_1").value);

    switch (true) {
        case temp >= 40 && temp <= 50:
            document.getElementById("Temp_1").innerHTML = ("Temperature is burning hot");
            break;
            case temp >=30 && temp <=39:
            document.getElementById("Temp_1").innerHTML = ("Temperature is burning hot");
            break;
            case temp >= 20 && temp <= 29:
            document.getElementById("Temp_1").innerHTML = ("Temperature is Mild And Pleasant");
            break;
            case temp >=10 && temp <=19:
            document.getElementById("Temp_1").innerHTML = ("Temperature is cold");
            break;
            case temp >=1 && temp <=9:
            document.getElementById("Temp_1").innerHTML = ("Temperature is freezing cold");
            break;
            case temp >=-1 && temp <=-55:
            document.getElementById("TC1").innerHTML= ("Temperature is too low to go outside");
            break;
        default:
            document.getElementById("Temp_1").innerHTML = ("Temperature is invalid");
    }
}