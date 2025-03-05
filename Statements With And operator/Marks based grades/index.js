function Get_Grades() {
   let Marks = document.getElementById("Mar_1").value;

    if (Marks >= 95 && Marks <= 100) {
        document.getElementById("Gra_1").innerHTML = ("A+");
    }
    else if (Marks >= 90 && Marks <= 94) {
        document.getElementById("Gra_1").innerHTML = ("A");
    }
    else if (Marks >= 85 && Marks <= 89) {
        document.getElementById("Gra_1").innerHTML = ("B+");
    }
    else if (Marks >= 80 && Marks <= 84) {
        document.getElementById("Gra_1").innerHTML = ("B");
    }
    else if (Marks >= 75 && Marks <= 79) {
        document.getElementById("Gra_1").innerHTML = ("C+");
    }
    else if (Marks >= 70 && Marks <= 74) {
        document.getElementById("Gra_1").innerHTML = ("C");
    }
    else if (Marks >=65 && Marks <= 69) {
        document.getElementById("Gra_1").innerHTML = ("D+");
    }
    else if (Marks >= 60 && Marks <= 64) {
        document.getElementById("Gra_1").innerHTML = ("D");
    }
    else if (Marks >= 55 && Marks <= 59) {
        document.getElementById("Gra_1").innerHTML = ("E+");
    }
    else if (Marks >= 50 && Marks <= 54) {
        document.getElementById("Gra_1").innerHTML = ("E");
    }
    else if (Marks >= 1 && Marks <= 49) {
        document.getElementById("Gra_1").innerHTML = ("Fail");
    }
    else {
        document.getElementById("Gra_1").innerHTML = ("invalid");
    }
}