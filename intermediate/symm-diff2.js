function diffArray(arr1, arr2) {
    let unionSet = new Set([...arr1, ...arr2])
    let unionArr = [...unionSet]
    
    return unionArr.filter(item => !arr1.includes(item) || !arr2.includes(item))
}
  
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

