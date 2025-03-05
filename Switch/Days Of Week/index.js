function Get_Days() {
    let number = Number(document.getElementById("Num_1").value);
    document.getElementById("Days_1").innerHTML = ("number");

    switch (number) {
        case 1:
            document.getElementById("Days_1").innerHTML = ("number is" + Saturday);
            break;
            case 2:
                document.getElementById("Days_1").innerHTML = ("Sunday");
             break;
             case 3:
                document.getElementById("Days_1").innerHTML = ("Monday");
             break;
             case 4:
                document.getElementById("Days_1").innerHTML = ("Tuesday");
             break;
             case 5:
                document.getElementById("Days_1").innerHTML = ("Wednesday");
             break;
             case 6:
                document.getElementById("Days_1").innerHTML = ("Thursday");
             break;
             case 7:
                document.getElementById("Days_1").innerHTML = ("Friday");
             break;
        default:
            document.getElementById("Days_1").innerHTML = ("Invalid");
            break;
    }
}