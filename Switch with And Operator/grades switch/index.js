
    function Get_Grades() {
        let Marks = document.getElementById("Mar_1").value;
     switch(true) {
           case Marks >= 95 && Marks <= 100 :
             document.getElementById("Gra_1").innerHTML = ("A+");
         break;
          case Marks >= 90 && Marks <= 94 :
             document.getElementById("Gra_1").innerHTML = ("A");
             break;
         
         case Marks >= 85 && Marks <= 89:
             document.getElementById("Gra_1").innerHTML = ("B+");
         break;
         case Marks >= 80 && Marks <= 84:
             document.getElementById("Gra_1").innerHTML = ("B");
         break;
         case Marks >= 75 && Marks <= 79 :
             document.getElementById("Gra_1").innerHTML = ("C+");
         break;
         case Marks >= 70 && Marks <= 74:
             document.getElementById("Gra_1").innerHTML = ("C");
         break;
         case Marks >=65 && Marks <= 69:
             document.getElementById("Gra_1").innerHTML = ("D+");
         break;
         case Marks >= 60 && Marks <= 64:
             document.getElementById("Gra_1").innerHTML = ("D");
         break;
         case Marks >= 55 && Marks <= 59:
             document.getElementById("Gra_1").innerHTML = ("E+");
         break;
         case Marks >= 50 && Marks <= 54:
             document.getElementById("Gra_1").innerHTML = ("E");
         break;
         case Marks >= 1 && Marks <= 49:
             document.getElementById("Gra_1").innerHTML = ("Fail");
         break;
         default:
             document.getElementById("Gra_1").innerHTML = ("invalid");
        }
     }
