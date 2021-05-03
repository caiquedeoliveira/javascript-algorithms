/*
You will be provided with an initial array (the first argument in the destroyer function), 
followed by one or more arguments. 
Remove all elements from the initial array that are of the same value as these arguments.
Note: You have to use the arguments object.
*/

function destroyer1(arr){
    let toBeDestroyed = [...arguments].slice(1)

    let notDestroyed = []

    for(let el of arr){
        if(!toBeDestroyed.includes(el)){
            notDestroyed.push(el)
        }
    }

    return notDestroyed
}


console.log(destroyer1([1, 2, 3, 1, 2, 3], 2, 3)) // [1, 1]
console.log(destroyer1(["tree", "hamburger", 53], "tree", 53)) // ["hamburger"]



function destroyer(arr) {
    let toBeDestroyed = []

    for(let i=0; i < arguments.length; i++){
        if(arguments[0].includes(arguments[i+1])){
            toBeDestroyed.push(arguments[i+1])
        }
    }

    let notDestroyed = []

    for(let el of arr){
        if(!toBeDestroyed.includes(el)){
            notDestroyed.push(el)
        }
    }

    return notDestroyed

}
  

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)) // [1, 1]
console.log(destroyer(["tree", "hamburger", 53], "tree", 53)) // ["hamburger"]