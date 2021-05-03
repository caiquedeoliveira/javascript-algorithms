function sumAll(arr){
    let min, max;

    if(arr[0] < arr[1]){
        min = arr[0]
        max = arr[1]
    } else if(arr[0] > arr[1]){
        max = arr[0]
        min = arr[1]
    }

    let sum = 0;
    for(let i=min; i <= max; i++){
        sum += i
    }

    return sum
}


console.log(sumAll([1,4]))
console.log(sumAll([4, 1]))


// Refactoring using Ternary Operator

function stillSumingAll(arr){
    let min = arr[0] < arr[1] ? arr[0] : arr[1]
    let max = arr[1] > arr[0] ? arr[1] : arr[0]

    let sum = 0
    for(let i=min; i <= max; i++){
        sum += i
    }

    return sum
}

console.log(stillSumingAll([1, 4]))
console.log(stillSumingAll([4, 1]))


// Refactoring even further
function sumItAll(arr){
    let sum = 0
    for(let i=Math.min(...arr); i <= Math.max(...arr); i++){
        sum += i
    }

    return sum
}

console.log(stillSumingAll([1, 4]))
console.log(stillSumingAll([4, 1]))