
/*
Return the provided string with the first letter of each word capitalized.
Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like the and of.
*/

function titleCase(str) {
    let titleArray = str.split(" ")

    let arraySentence = []

    for(let i=0; i < titleArray.length; i++){
        let firstLetter = titleArray[i].toUpperCase().substring(0, 1)
        let lastLetter = titleArray[i].toLowerCase().substring(1, titleArray[i].length)

       let fullWord = [...firstLetter, ...lastLetter].join("")
       arraySentence.push(fullWord)
    }
    
    return arraySentence.join(" ")

}
  
console.log(titleCase("I'm a little tea pot"));