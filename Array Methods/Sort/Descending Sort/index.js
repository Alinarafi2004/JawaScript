//This method is used to arrange/sort array’s elements either in ascending or descending order.
function Get_Sort() {
  const arr = [7,9,5,1,0,8];
  descend = arr.sort();
  //console.log(descend);
  document.getElementById("D_A").innerHTML = ("Descending Array is : " + arr);  
}
