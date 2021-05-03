const users = [
    {
      name: "Salvio",
      incomes: [115.3, 48.7, 98.3, 14.5],
      expenses: [85.3, 13.5, 19.9]
    },
    {
      name: "Marcio",
      incomes: [24.6, 214.3, 45.3],
      expenses: [185.3, 12.1, 120.0]
    },
    {
      name: "Lucia",
      incomes: [9.8, 120.3, 340.2, 45.3],
      expenses: [450.2, 29.9]
    },
    {
        name: "Caique",
        incomes: [740, 400],
        expenses: [400]
    }
  ];

  function sum(array){
      let total = 0

      for(let value of array){
          total += value
      }

      return total
  }

  
function calcBalance(users){

    for(let user of users){
        const calcIncomes = sum(user.incomes)
        const calcExpenses = sum(user.expenses)

        let total = calcIncomes - calcExpenses

        if(total >= 0){
            console.log(`${user.name} possui saldo POSITIVO. Seu balanço bancário é de ${total.toFixed(2)} reais`)
        } else {
            console.log(`${user.name} possui saldo NEGATIVO. Seu balanço bancário é de ${total.toFixed(2)} reais`)
        }
    }
}

calcBalance(users)