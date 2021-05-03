/*
Repeat a given string str (first argument) for num times (second argument). 
Return an empty string if num is not a positive number. 
For the purpose of this challenge, do not use the built-in 
.repeat() method
*/

function repeatStringNumTimes(str, num) {
    
    let strArray = []
    for(let i=1; i <= num; i++){
        if(num > 0){
            strArray.push(str)
        } else {
            return str = " "
        }
    }

    let repeatedString = strArray.join("")

    return repeatedString
}
  
console.log(repeatStringNumTimes("abc", 2))
console.log(repeatStringNumTimes("abc", 3))
console.log(repeatStringNumTimes("abc", 0))
console.log(repeatStringNumTimes("abc", -3))
console.log(repeatStringNumTimes("abc", 2));