/*
    Celsius em Fahrenheit

    Função que receba uma string em Celsius ou Fahrenheit
    Transformação em uma unidade em outra
*/

function convertDegree(degree){
    const celsiusDegree = degree.includes('C')
    const fahrenheitDegree = degree.includes('F')
    
    const degreeValue = Number(degree.slice(0, degree.length - 1))
    
    if(!celsiusDegree && !fahrenheitDegree){
        throw new Error('Insira os valores no padrão: "10C ou 10F", por exemplo.')
    }

    if(celsiusDegree){
        let calcDegree = (degreeValue * 9/5) + 32
        console.log(`${degreeValue} Celsius is ${calcDegree} Fahrenheit`)
    } else if(fahrenheitDegree){
        let calcDegree = (degreeValue - 32) * 9/5
        console.log(`${degreeValue} Fahrenheit is ${calcDegree} Celsius`)
    }
   
}

try {
    convertDegree('50C')
    convertDegree('50F')
    convertDegree('50z')
} catch (error) {
    console.log(error.message)
}

