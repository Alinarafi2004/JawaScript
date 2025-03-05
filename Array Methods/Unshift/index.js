//This method adds one or more elements to the beginning of an array and returns the new length 
// of the array.
function Get_Unshift() {
    const B_N = ["Eyes" , "Nose" , "Hands" ,"Legs"];
    B_N.unshift("Finger" , "Toes");
    //console.log(B_N);
    document.getElementById("Array_1").innerHTML = ("Unshifted Array is : " + B_N);
    
}
