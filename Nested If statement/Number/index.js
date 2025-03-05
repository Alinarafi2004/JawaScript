function Get_Number() {
    let number = document.getElementById("Num_1").value;

    if (number >= 10) {
        document.getElementById("GL_1").innerHTML = ("number is more than 10.")
        if (number > 15) {
            document.getElementById("GL_1").innerHTML = ("number is also more than 15.")
        }            
    }            
        else{
            document.getElementById("GL_1").innerHTML = ("number is less than 10.") 
        }
}