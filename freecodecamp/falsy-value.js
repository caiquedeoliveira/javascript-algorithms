/*
Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
*/

function bouncer(arr) {
    let truthyValues = []

    for(let el of arr){
      let checkingBoolean =  Boolean(el)

      if(checkingBoolean){
          truthyValues.push(el)
      }
    }

    return truthyValues
}
  
bouncer([7, "ate", "", false, 9]);