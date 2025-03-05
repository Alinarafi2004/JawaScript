function Get_Reduce() {
    const array = [1 , 2 , 3 , 4 , 5 , 6 ];
    const reduced = array.reduce((total , current) => total + current);
    document.getElementById("Red_1").innerHTML = ("Reduced Array is : " + reduced);
}
//This method applies a function against an accumulator and each element in the array to
//reduce it to a single value.