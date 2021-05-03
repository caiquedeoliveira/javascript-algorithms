function reverseString(str) {
    let reversing = [...str].reverse().join("")
    return reversing
  }
  
  reverseString("hello"); 
  // Output: olleh