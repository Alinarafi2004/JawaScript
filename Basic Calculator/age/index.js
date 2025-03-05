function Get_Age() {
   let  Current_Year = document.getElementById("CY_1").value;
   let Birth_Year = document.getElementById("BY_1").value;
   let age = Current_Year - Birth_Year;
   document.getElementById("Age_1").innerHTML = ("Your age is : " + age);
   alert("Your age is : " + age);
   console.log("Your age is : " + age);
}