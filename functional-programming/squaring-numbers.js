const squareList = arr => {
    let filteredArr = arr.filter(item => item >= 0 && Number.isInteger(item))
    console.log(filteredArr) // [ 5, 3 ]
    
    let squaringNumbers = filteredArr.map( el => el * el)
    console.log(squaringNumbers) // [ 25, 9 ]
    
    return squaringNumbers;
    };
    
    const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
    console.log(squaredIntegers);
    
    console.log(squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]))