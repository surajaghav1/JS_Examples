// there are two ways to create a string 
let str="suraj"  // using double quote
console.log(str);
let s='ram';    // using signle quote 
console.log(s);

// another way is using `` this brackets (back ticks) called =>> templete literal 
let sentence=`hi i am suraj aghav`;
console.log(sentence)

// we can also print variable inside this templete literal using "$" symbol this is called =>> String Interpolation
let a="sham"
let b="school"
let sen=`${a} is going to ${b}`;    // it will give the value of variable 
console.log("value of a : "+a)
console.log("value of b : "+b)
console.log(sen)


// we can add signle quoted string inside the templete string 
let st=`hi i am 'suraj' and from "ahmednagar" by`;
console.log(st)
