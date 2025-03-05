function Get_Push() {
   //This method adds one or more elements to the end of array and returns the new length of the array.
let colors = ["Red" , "Blue" , "Black"];
document.getElementById("Push_1").innerHTML = (colors.push("Green"));
//console.log(colors.push("Green"));
document.getElementById("Push_1").innerHTML = ("Pushed Array is : " + colors)
}