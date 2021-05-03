/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, 
but not both. 
In other words, return the symmetric difference of the two arrays.
Note: You can return the array with its elements in any order.
*/


function diffArray(arr1, arr2) {
    let commonEl = []

    for(let el of arr1){
        if(!commonEl.includes(el)){
            commonEl.push(el)
        }
    }

    for(let el of arr2){
        if(!commonEl.includes(el)){
            commonEl.push(el)
        }
    }

    console.log(commonEl)
    let diffEl = []

    for(let el of commonEl){
        if(arr1.includes(el) && !arr2.includes(el)){
            diffEl.push(el)
        } else if(!arr1.includes(el) && arr2.includes(el)){
            diffEl.push(el)
        }
    }

    return diffEl
}
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])); // 4