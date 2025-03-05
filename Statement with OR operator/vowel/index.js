function Get_vowel() {
    let letter = document.getElementById("Let_1").value;
    alert("Letter");

    if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u') {
        document.getElementById("Vowel_1").innerHTML =  ("Letter is vowel")
    }
    else{
        document.getElementById("Vowel_1").innerHTML =  ("Invalid")
    }
}