function whatIsInAName(collection, source) {
    const arr = []
    const keys = Object.keys(source)

    for (const obj of collection) {
        let hasAllKeyValuePairs = true;
        for (const key of keys) {
            if (obj[key] !== source[key]) {
                hasAllKeyValuePairs = false
                break
            }
        }
        if (hasAllKeyValuePairs) {
            arr.push(obj)
        }
    }
    return arr
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));



// REFACTORING

function whatIsInAName(collection, source) {
    const keys = Object.keys(source)

    return collection.filter(obj => {
        let hasAllKeyValuePairs = true;
        for (const key of keys) {
            if (obj[key] !== source[key]) {
                hasAllKeyValuePairs = false;
                break;
            }
        }
        return hasAllKeyValuePairs;
    })

}


// REFACTOR USING REDUCE

function whatIsInAName(collection, source) {
    const keys = Object.keys(source)

    return collection.filter(obj => {

        const hasAllKeyValuePairs = keys.reduce((acc, key) => {
            if (obj[key] !== source[key]) {
                return false
            }
            return acc;
        }, true)

        return hasAllKeyValuePairs
    })
}