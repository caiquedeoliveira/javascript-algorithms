/*
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
Return the truncated string with a ... ending.

*/
function truncateString(str, num) {
    let countString = str.length > num
    if(countString) {
        let slicedString = str.slice(0, num)
        return slicedString+"..."
    } else {
        return str
    }
}
  

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8)); // A-tisket...
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)) // A-tisket a-tasket A green and yellow basket
console.log(truncateString("A-", 1)) //A...