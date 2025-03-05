function Get_concat() {
   // This method is used to merge two or more arrays and returns a new array, without changing
   //  the existing arrays.
let arr_1 = document.getElementById("Arr_1").value;
let arr_2 = document.getElementById("Arr_2").value;
let arr_3 = arr_1.concat(arr_2);
document.getElementById("concat_1").innerHTML = ("The concatenated array is : " + arr_3);
alert("The concatenated array is : " + arr_3)

}