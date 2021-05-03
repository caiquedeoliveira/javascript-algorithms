// Programa para calcular o IMC de uma pessoa

const personIMC = [
    {
        nome: "Caique",
        peso: 75,
        altura: 1.65,
    },
    {
        nome: "Isadora",
        peso: 50,
        altura: 1.59,
    },
    {
        nome: "João Paulo",
        peso: 80,
        altura: 1.81,
    },
    {
        nome: "Fulano de tal",
        peso: 120,
        altura: 1.70
    }
]

function calculatingIMC(imc) {

    for (let value of imc) {
        let imcValue = value.peso / (value.altura * value.altura)

        if (imcValue >= 30) {
            console.log(`${value.nome}, você está acima do peso. Seu IMC é de ${imcValue.toFixed(2)}`)
        } else {
            console.log(`${value.nome}, você não está acima do peso. Seu IMC é de ${imcValue.toFixed(2)}`)
        }
    }
}



