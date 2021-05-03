// let myArray = [50, 460, 22, 78, 4, 64, 15, -10]

function bubbleSortex(array){
  for(let last=array.length - 1; last > 0; last--){
      for(let i=0; i < last; i++){
          if(array[i] > array[i+1]){
              [array[i], array[i+1]] = [array[i+1], array[i]]
          }
      }
  }
  return array
}



// versão otimizada

function optimizedBubble(array){
    let swap
    let last = array.length - 1;

    do {
        swap = false
        for(let i = 0; i < last; i++){
            if(array[i] > array[i + 1]){
                [array[i], array[i+1]] = [array[i+1], array[i]]
                swap = true
            }
        }
        last--
    } while (swap)
    return array
}


//console.log(optimizedBubble(myArray))

let myArray = [50, 460, 22, 78, 4, 64, 15, -10]

function bubbleSort(array){
    
    for(let i=0; i < array.length - 1; i++){ // iterando até o último elemento do array, pois ele não vai ser comparado com ninguém após ele
        for(let j=0; j < array.length - 1 - i; j++){ // iterando até o último elemento lockado do array, vão sendo lockados a cada iteração
            if(array[j] > array[j+1]){ // comparando a posição 1 com a posição 2 do array
                [array[j], array[j+1]] = [array[j+1], array[j]] // se for true, são trocados de lugar
            }
        }
    }
    return array
}

/*  Pseudo-código
Abrir uma função que vai receber um array {
    (Realizar um aninhamento de laços para comparar as posições do Array)
    Primeiro for: iterar através do array até o último elemento (array.length - 1), pois ele não vai ser comparado com ninguém após{
        Segundo for: Iterar do primeiro até o último elemento (que estiver lockado nas últimas posições) do array{
            Estrutura condicional: if para comparar se a posição i do array é maior que a posição i+1 (ex: posição 0 > 1?){
                Se a condição for verdadeira, troque a posição i e a posição i+1 de lugar (Se for falsa (else), não faça nada)
            }

        }
    }
   retorne o array  
}
*/
console.log(bubbleSort(myArray))
// Output: [-10,  4, 15,  22, 50, 64, 78, 460]






// Refactoring the bubbleSort

function bubbleRefact(array){
    const arr = array.slice()

    for(let i=0; i < arr.length - 1; i++){
        for(let j=0; j < arr.length - 1 - i; j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }

    return arr
}

// console.log(bubbleRefact(myArray))


// let myArray = [50, 460, 22, 78, 4, 64, 15, -10]

function bubbleBackwards(array){

    for(let i=0; i < array.length - 1; i++){
        for(let j=0; j < array.length - 1 - i; j++){
            if(array[j] < array[j+1]){
                [array[j], array[j+1]] = [array[j+1], array[j]]
            }
        }
    }

    return array
}

// console.log(bubbleBackwards(myArray))