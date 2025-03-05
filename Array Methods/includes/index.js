//This method checks if an array includes the element that passes the condition, returning 
//true or false as appropriate.
function Get_Include() {
   let array = document.getElementById("Arr_1").value;
    const included = array.includes(3);
    document.getElementById("Inc_1").innerHTML = ("Included Array is " + included);
}