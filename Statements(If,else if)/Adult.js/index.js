function Get_Age() {
    let Number = document.getElementById("Num_1").value;

    if (Number == 18) {
        document.getElementById("Age_1").innerHTML = ("Adult")

    } else {
        document.getElementById("Age_1").innerHTML = ("Not An Adult")

    }
}