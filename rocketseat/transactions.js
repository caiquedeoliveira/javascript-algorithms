const user = {
    name: "Caique",
    transactions: [],
    balance: 0
}

function createTransaction(transaction) {
    const creditTransaction = transaction.type === "credit"
    const debitTransaction = transaction.type === "debit"

    if (creditTransaction) {
        user.transactions.push(transaction)
        user.balance += transaction.value
    } else if (debitTransaction) {
        user.transactions.push(transaction)
        user.balance -= transaction.value
    }

    // if(!creditTransaction && !debitTransaction){
    //     throw new Error('Insira valores de crédito ou débito válidos')
    // } // fazer try/catch ali fora
}

createTransaction({
    type: "credit",
    value: 50
})
createTransaction({
    type: "debit",
    value: 25
})

createTransaction({
    type: "credit",
    value: 75
})

createTransaction({
    type: "debit",
    value: 40
})

/* 
    Retornar o objeto de maior valor do tipo
        Type = credit/debit
        Percorrer as transações do usuário
*/

function getHigherTransactionByType(type) {
    let maxValue = 0 
    let maxTransaction

    for(let transaction of user.transactions){
        if(transaction.type === type && transaction.value > maxValue){
            maxValue = transaction.value
            maxTransaction = transaction 
        }
    }

    return maxTransaction
}

/*
        Contar quantas transações de cada tipo (credit/debit)
*/

function getTransactionCount(){
    let creditCount = 0
    let debitCount = 0

    for(let count of user.transactions){
        if(count.type === 'credit'){
            creditCount += 1
        } else if(count.type === 'debit'){
            debitCount += 1
        }
    }

    return `{credit: ${creditCount}, debit: ${debitCount}}`
}

/*
    Retornar o valor médio das transações do usuário,
    independente do seu tipo
*/

function getAverageTransactionValue(){
    let totalValue = 0
    let totalTransactions = user.transactions.length

    for(let total of user.transactions){
        totalValue += total.value
    }

    const averageTransactionValue = totalValue / totalTransactions
    return averageTransactionValue
}



console.log(user)
console.log(getHigherTransactionByType('credit'))
console.log(getHigherTransactionByType('debit'))
console.log(getTransactionCount())
console.log(getAverageTransactionValue())