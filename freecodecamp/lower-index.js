/*
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) 
once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0),
but less than 2 (index 1).

*/
function getIndexToIns(arr1, num) {
    let arr = [...arr1].slice()
    arr.push(num)

/*
The following iteration could be done using the sort method:
  arr.sort(function(a, b) {
    return a - b;
  });
*/

for(let i=0; i < arr.length - 1; i++){
    for(let j=0; j < arr.length - 1 - i; j++){
        if(arr[j] > arr[j+1]){
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
        }
    }
}

return arr.indexOf(num)

}
  
console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([5, 3, 20, 3], 5)) // [ 3, 3, 5, 20 ]