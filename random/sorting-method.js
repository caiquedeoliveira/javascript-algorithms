
// Ordem crescente
let array = [50, 460, 22, 78, 4, 64, 15]

array.sort( (a, b) => {
    return a - b
})

console.log(array)  // [4, 15, 22, 50, 64, 78, 460]



// Ordem Decrescente
let myArray = [50, 460, 22, 78, 4, 64, 15]
array.sort( (a, b) => {
    return a + b
})

console.log(myArray)