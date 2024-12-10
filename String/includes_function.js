let str="suraj\"";
console.log(str)
console.log(str.length)

// includes function 
let sentence="This is demo file";
console.log(sentence)
// includes function return =>> true if the value contain in this original string
// it returns false if there is no any value 

console.log(sentence.includes("demo"));  // it return true 
console.log(sentence.includes("demo12"));   // it return false 
let word="demo";
console.log(`${sentence} is this contain "${word} word" =>> True or False : `,sentence.includes(word))