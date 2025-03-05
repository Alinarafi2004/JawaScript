//This method removes the last element from the end of array and returns that element.
function Get_Popfunc() {
  const fruits = ["Banana" , "Apple" , "Fig"];
  console.log(fruits.pop());
  //console.log(fruits);  
  document.getElementById("Pop_1").innerHTML = ("Poped Array is : " + fruits);
}