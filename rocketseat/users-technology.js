// log each technology the users work with and find out if they work with CSS

const users = [
    { name: "Carlos", technologies: ["HTML", "CSS"] },
    { name: "Jasmine", technologies: ["JavaScript", "CSS"] },
    { name: "Caique", technologies: ["JavaScript", "React"]},
    { name: "Tuane", technologies: ["HTML", "Node.js"] },
    { name: "Isadora", technologies: ["C++", "CSS"]}
    
]

function whichTechnology(users){

    for(let user of users){
        let cssUser = user.technologies.indexOf('CSS') > -1
        console.log(`User ${user.name} works with ${user.technologies.join(' and ')}`)

        if(cssUser){
            console.log(`User ${user.name} works with CSS`)
        }
    }

    
}

whichTechnology(users)