/* 
    Sistema de controle de gastos familiares

*/
const familyBalance = {
    incomes: [740, 400, 2300, 10500],
    expenses: [1000, 4000, 3500, 300, 400, 500]
}

function sum(array){
    let total = 0

    for(let value of array){
        total += value
    }

    return total
}


function calcBalance(){
    const familyIncomes = sum(familyBalance.incomes)
    const familyExpenses = sum(familyBalance.expenses)

    let total = familyIncomes - familyExpenses
    let positiveBalance = total >= 0

    if(positiveBalance){
        console.log(`The balance was POSITIVE. There's ${total.toFixed(2)} in your bank account.`)
    } else {
        console.log(`The balance was NEGATIVE. There's ${total.toFixed(2)} in your bank account.`)
    }
}

calcBalance()