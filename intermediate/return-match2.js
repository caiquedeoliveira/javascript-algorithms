function whatIsInAName(collection, source) {
    let sourcing = Object.values(source)
    console.log(sourcing)
    let nameFound = []
  
    for(let i=0; i < collection.length; i++){
      let collValues = String(Object.values(collection[i]))
      console.log(collValues)
  
      if(collValues.includes(sourcing)){
        nameFound.push(collection[i])
      }
    }
  
    return nameFound 
  }
    
  console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
  