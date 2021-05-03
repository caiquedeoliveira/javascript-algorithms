/*
    Buscando e contando dados em Arrays

    Baseado no Array de livros por categoria:

    - Contar o número de categorias e o número de livros em cada categoria 
    - Contar o número de autores
    - Mostrar os livros do autor Augusto Cury
    - Transformar a função acima em uma função que irá receber o nome do autor
    e devolver os livros desse autor
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harvey Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter"
            }
        ]
    },
    {
        category: "Inteligência emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey"
            }
        ]
    }
]


// Contar o número de categorias e o número de livros em cada categoria 

let numberOfCategories = booksByCategory.length
console.log(`Esta biblioteca possui ${numberOfCategories} categorias de livros.`)

for(let books of booksByCategory){
    let categoryNames = books.category
    let booksEachCategory = books.books.length 

    console.log(`Foram encontrados ${booksEachCategory} livros na categoria ${categoryNames}.`)
}

// Contar o número de autores

function countAuthors(){
        let authors = [];
    
        for(let category of booksByCategory){
            for(let book of category.books){
                if(authors.indexOf(book.author) == -1){
                    authors.push(book.author)
                }
            }
        }
        console.log(`Total de autores: ${authors.length}.`)
        console.log(authors.join(', '))
    }
    
    countAuthors()

// Mostrar os livros do autor Augusto Cury

function findCury(){
    let curyBooks = []

    for(let category of booksByCategory){
        for(let books of category.books){
            if(books.author === "Augusto Cury"){
                curyBooks.push(books.title)
            }
        }
    }

    console.log(curyBooks)
}

findCury()


// Transformar a função acima em uma função que irá receber o nome do autore devolver os livros desse autor

function matchingBooksAndAuthors(author){
    let titles = []

    for(let category of booksByCategory){
        for(let books of category.books){
            if(books.author.indexOf(author) > -1){
                titles.push(books.title)
            }
        }
    }

    console.log(titles)
}

matchingBooksAndAuthors("Stephen R. Covey")