
function diffArrays(array1, array2){
    let sameNumbers = []

    for(arr1 of array1){
        if(!sameNumbers.includes(arr1)){
            sameNumbers.push(arr1)
        }
    }

    for(arr2 of array2){
        if(!sameNumbers.includes(arr2)){
            sameNumbers.push(arr2)
        }
    }

    console.log(sameNumbers) // [1, 2, 3, 4, 5, 7, 6]

    let diffNumbers = []

    for(let element of sameNumbers){
        if(array1.includes(element) && !array2.includes(element)){
            diffNumbers.push(element)
        } else if (array2.includes(element) && !array1.includes(element)){
            diffNumbers.push(element)
        }
    }

    return diffNumbers // [ 3, 4, 7, 6 ]
}

console.log(diffArrays([1, 2, 3, 4, 5], [1, 2, 7, 5, 6]))
// Output should be: 3, 4, 7, 6



/* REFACTORING THE CODE USING THE SET METHOD */

function diffArraysSetMethod(arr1, arr2){
    let newSet = new Set([...arr1, ...arr2]) 
    // // [1, 1,  2, 2, 3, 4, 5, 5, 7, 6] -> [1, 2, 3, 4, 5, 7, 6]
    console.log(newSet)

    let symmDiff = []

    for(let currentEl of newSet){
        if(arr1.includes(currentEl) && !arr2.includes(currentEl)){
            symmDiff.push(currentEl)
        } else if(arr2.includes(currentEl) && !arr1.includes(currentEl)){
            symmDiff.push(currentEl)
        }
    }

    return symmDiff // // [ 3, 4, 7, 6 ]
}

console.log(diffArraysSetMethod([1, 2, 3, 4, 5], [1, 2, 7, 5, 6]))


/* 
Technically, a set in Javascript is an array-like object, 
but not an actual array. If, for whatever reason, you wanted
to convert a set to an array you can do:
    const newArr = [...newSet]
    ou
    const new Arr = Array.from(newSet)
*/