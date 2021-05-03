
function findLongestWordLength(str) {
    let wordsArray = str.split(" ") 
    // ['The','quick','brown','fox','jumped','over','the','lazy','dog'] 
    let longestWordLength = 0
    let longestWord

    for(let i=0; i < wordsArray.length; i++){
        let words = wordsArray[i]
        if(words.length > longestWordLength){
            longestWordLength = words.length
            longestWord = words
        }
    }

    return `The longest word is ${longestWord} with ${longestWordLength} letters.`
}
  
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));