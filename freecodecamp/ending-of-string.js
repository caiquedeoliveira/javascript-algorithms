/*
Check if a string (first argument, str) 
ends with the given target string (second argument, target).
*/

// ONLY THE LAST WORD
// function confirmEnding(str, target) {
//     let lastLetter = str.substring(str.length-1)

//     return lastLetter == target ? true : false
// }
  
function confirmEnding(str, target) {
    let lastWords = str.substring(str.length-target.length)

    return lastWords == target ? true : false
}

console.log(confirmEnding("Bastian", "n"))  // true
console.log(confirmEnding("Bastian", "a")) // false
console.log(confirmEnding("Mountain", "tian")) // false