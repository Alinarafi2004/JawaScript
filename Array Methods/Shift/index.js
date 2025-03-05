//This method removes the first element from an array and returns that element.
function Get_Shift() {
    const Number = [1,2,3,4,5,6,7];
    Number.shift();
    //console.log(Number);
    document.getElementById("S_A").innerHTML = ("Shifted Array is : " + Number);
}