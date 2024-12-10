// convert string to number 
let str="hii this is RS 500"
console.log(str)
console.log("length of str : ",str.length)
console.log("Slice the string ")
let amt=str.slice(15)
console.log("amount in string format ",amt)
console.log("Type of amt : "+typeof(amt))
let amount=Number.parseInt(amt)
console.log(amount," type of amount ; "+typeof(amount))
