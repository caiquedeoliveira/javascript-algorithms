// Iterate thru the users and log the first technology it works with

const users = [
    {
        name: "Caique",
        age: 23,
        technologies: [
            { name: "JavaScript", focus: "Web/Mobile" },
            { name: "React", focus: "Web" }
        ]
    },
    {
        name: "Diego",
        age: 25,
        technologies: [
            { name: "Python", focus: "Data Science" },
            { name: "JavaScript", focus: "Web/Mobile" },
            { name: "React", focus: "Web" },
        ]
    },
]

function whoAreYou(users) {

    for (let i = 0; i < users.length; i++) {
        console.log(`The user ${users[i].name} is ${users[i].age} years old and uses the technology ${users[i].technologies[0].name} focusing on ${users[i].technologies[0].focus}`)
    }
}

whoAreYou(users)


