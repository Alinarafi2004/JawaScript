function Get_Cloning() {
    let arr_1 = document.getElementById("Arr_1").value;
    let arr_2 = document.getElementById("Arr_2").value;
    let arr_3 = document.getElementById("Arr_3").value;
    let arr_4 = [arr_1,arr_2,arr_3];
    document.getElementById("Clone_1").innerHTML = ("Cloning of array is : " + arr_4);
    alert("Cloning of array is : " + arr_4);
}