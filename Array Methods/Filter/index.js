function Get_Filter() {
    //This method creates a new array with only elements that passes the condition inside the
    //provided function.
    let arr_1 = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8];
    const filtered = arr_1.filter(e => e === 5 || e === 8);
   document.getElementById("Array_1").innerHTML = ("Filtered Array is : " + filtered);
}