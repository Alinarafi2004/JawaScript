function Get_Map() {
    // This method creates a new array with the results of calling a provided function
    //  on every element in this array.
    const arr = [1, 2, 3, 4, 5];
    const mapped = arr.map(x => x * 6);
    console.log(mapped);
}