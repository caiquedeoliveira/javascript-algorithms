function diffArrays2(arr1, arr2){
    let newArr = []
    
    let concat = arr1.concat(arr2) // Concatenar os dois arrays em um só
    concat.sort( (a,b) => { return a - b}) // Ordenar os números por ordem crescente
    console.log(concat) // // [1, 1, 2, 2, 3, 4, 5, 5, 6, 7 ]

    for(let values of concat){
        if(!newArr.includes(values)){ // Se o newArr não incluir o valor i percorrido pelo for, inclua ele no array.
            newArr.push(values)
        }
    }
    
    console.log(newArr) // [1, 2, 3, 4, 5, 6, 7]

    let diffNumbers = []

    for(let item of newArr){
        if(arr1.includes(item) && !arr2.includes(item)){
            diffNumbers.push(item)
        } else if(arr2.includes(item) && !arr1.includes(item)){
            diffNumbers.push(item)
        }
    }

    return diffNumbers  // [ 3, 4, 6, 7 ]

}


console.log(diffArrays2([1, 2, 3, 4, 5], [1, 2, 7, 5, 6]))