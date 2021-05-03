/*
    Transformar notas escolares
    Notas em sistema númerico em sistema de notas em caracteres 
*/
const students = [
    {
        name: "Caique",
        grade: 87,
        isFlunked: false
    },
    {
        name: "Isadora",
        grade: 100,
        isFlunked: false
    },
    {
        name: "João",
        grade: 65,
        isFlunked: false
    },
    {
        name: "Adrian",
        grade: 35,
        isFlunked: false
    },
    {
        name: "Random",
        grade: 77,
        isFlunked: false
    },
    {
        name: "Ricardo",
        grade: 22,
        isFlunked: false
    }
]

function calcSchoolGrade(users){

    for(let user of users) {
    let gradeA = user.grade >= 90 && user.grade <= 100
    let gradeB = user.grade >= 80 && user.grade <= 89
    let gradeC = user.grade >= 70 && user.grade <= 79
    let gradeD = user.grade >= 60 && user.grade <= 69
    let gradeF = user.grade >= 0 && user.grade < 60

    
    if(gradeA){
        console.log(`You scored ${user.grade} in the final test. Your grade is A!`)
    } else if(gradeB){
        console.log(`You scored ${user.grade} in the final test. Your grade is B!`)
    } else if(gradeC){
        console.log(`You scored ${user.grade} in the final test. Your grade is C.`)
    } else if (gradeD){
        console.log(`You scored ${user.grade} in the final test. Your grade is D...`)
    } else if(gradeF){
        user.isFlunked = true
        console.log(`You scored ${user.grade} in the final test. You shall not pass.`)
    }

}
}


calcSchoolGrade(students)
console.log(students) // isFlunked -> false to true