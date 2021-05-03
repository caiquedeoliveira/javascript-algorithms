const users = [
    {
        name: "Caique",
        company: {
            name: "Camões",
            focus: "Education",
            address: {
                street: "Estrada dos Três Rios",
                number: "763"
            }
        }
    },
    {
        name: "Diego",
        company: {
            name: "Rocketseat",
            focus: "Development",
            address: {
                street: "Rua Guilherme Gemballa",
                number: "260"
            }
        }
    }
]

function whereDoYouWork(users){
    for(user of users){
        console.log(`User ${user.name} works at ${user.company.name} which is located at ${user.company.address.street}, ${user.company.address.number}`)
    }
}

whereDoYouWork(users)