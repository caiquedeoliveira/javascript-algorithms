function mutation(arr) {
    let arr1 = [...arr[0].toLowerCase()]
    let arr2 = [...arr[1].toLowerCase()]
    
    console.log(arr1)
    console.log(arr2)
  
  for(let i=0; i < arr2.length; i++){
    if(!arr1.includes(arr2[i])){
      return false
    }
  }
  return true
}

console.log(mutation(["hello", "hey"]))
console.log(mutation(["Noel", "Ole"]))
console.log(mutation(["Mary", "Aarmy"]))