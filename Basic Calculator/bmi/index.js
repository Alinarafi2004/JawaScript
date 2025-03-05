function BMI() {
    let Hei1 = document.getElementById("Hei1").value;
    let Wei1 = document.getElementById("Wei1").value;
    
    let bmi11 = Wei1/Hei1**2;
    document.getElementById("bmi1").innerHTML=("Your BMI is" + bmi11 );
    alert("Your BMI is" + bmi11 );
    console.log("Your BMI is" + bmi11);
}