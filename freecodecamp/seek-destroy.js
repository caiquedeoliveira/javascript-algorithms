/* 
    Disclosure: Arrow functions don't actually use arguments key-word
    Must use the spread operator in the parameter to acess the object
*/



function destroyer(arr){

    let toBeDestroyed = []

    for(let i=0; i < arguments.length; i++){
        if(arguments[0].includes(arguments[i+1])){
            toBeDestroyed.push(arguments[i+1])
        }
    }

    let notDestroyed = []

    for(let currentEl of arguments[0]){
        if(!toBeDestroyed.includes(currentEl)){
            notDestroyed.push(currentEl)
        }
    }

    return notDestroyed
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)) // [ 1, 1 ]
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)) // [ 1, 5, 1 ]
console.log(destroyer(["tree", "hamburger", 53], "tree", 53)) // [ 'hamburger' ]
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5)) // [1]


// let arr = [[1, 2, 3, 1, 2, 3], 2, 3]



// REFACTORING THE FUNCTION USING THE SLICE METHOD
function destroyer2(arr){
    let toBeDestroyed = [...arguments].slice(1)

    let notDestroyed = []

    for(let currentEl of arr){
        if(!toBeDestroyed.includes(currentEl)){
            notDestroyed.push(currentEl)
        }
    }

    return notDestroyed
}

console.log(destroyer(["Hendo", "Suarez", "Skrtel"], "Suarez", "Skrtel")) // ["Hendo"]

// REFACTORING EVEN FURTHER -> SLICE AND FILTER METHOD

function destroyer3(arr){
    let toBeDestroyed = [...arguments].slice(1)

    let notDestroyed = arr.filter(el => !toBeDestroyed.includes(el))

    return notDestroyed

    // or return arr.filter(el => !toBeDestroyed.includes(el))
}

console.log(destroyer3(["Rodgers", "Klopp", "Ljinders", "Benitez"], "Rodgers", "Benitez"))



// REFACTORING USING SLICE, FILTER AND ARROW FUNCTION

const destroyer4 = (...arr) => arr[0].filter( el => !arr.slice(1).includes(el))
    
console.log(destroyer4(["Rodgers", "Klopp", "Ljinders", "Benitez"], "Rodgers", "Benitez"))