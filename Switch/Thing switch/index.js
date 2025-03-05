function Get_Dom() {
    var thing_12 = document.getElementById("TH_1").value;
    document.getElementById("Good_1").innerHTML = ("thing_12");

    switch (thing_12) {
        case  "watch":
            document.getElementById("Good_1").innerHTML = ("thing is watch");
            break;
    case  "ring":
        document.getElementById("Good_1").innerHTML = ("thing is ring");
            break;
    case "table":
        document.getElementById("Good_1").innerHTML = ("thing is table");
            break;
        default:
            document.getElementById("Good_1").innerHTML = ("invalid");
    }
}