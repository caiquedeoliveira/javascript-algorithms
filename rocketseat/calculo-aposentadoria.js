/*
    Cálculo de aposentadoria fictícia :D
    Parâmetros generalizados:
    Men -> contribution >= 35      age + contributiion >= 95
    Women -> contribution >= 30    age + contributiion >= 85
*/ 

const retirementData = [
    {
        name: "Silvana",
        gender: "F",
        age: 48,
        contribution: 23,
    },
    {
        name: "João",
        gender: "M",
        age: 50,
        contribution: 36,
    },
    {
        name: "Altino",
        gender: "M",
        age: 80,
        contribution: 60,
    },
    {
        name: "Aline",
        gender: "F",
        age: 90,
        contribution: 60,
    },
    {
        name: "João Luiz",
        gender: "M",
        age: 50,
        contribution: 28
    }
]

function isRetirementAllowed(retirement){
    
    for(let retire of retirement){
        const allowMen = retire.gender ==="M" && retire.contribution >= 35 && retire.age+retire.contribution >= 95
        const allowWomen = retire.gender ==="F" && retire.contribution >= 30 && retire.age+retire.contribution >= 85

        let whatsLeftMen = 95 - (retire.age + retire.contribution)
        let whatsLeftWomen = 85 - (retire.age + retire.contribution)

        if(allowMen || allowWomen){
            console.log(`${retire.name}, você pode se aposentar. Aproveite a aposentadoria!`)
        } else if(retire.gender === "M") {
            console.log(`${retire.name}, você ainda não pode se aposentar. Continue trabalhando! Faltam ${whatsLeftMen} anos.`)
        } else if(retire.gender === "F"){
            console.log(`${retire.name}, você ainda não pode se aposentar. Continue trabalhando! Faltam ${whatsLeftWomen} anos.`)
        }
    }
}

isRetirementAllowed(retirementData)


