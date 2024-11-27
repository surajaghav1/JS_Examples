// scope of "let "=> is block level outside the block it is not accessible 


for(let i=0;i<10;i++){
    console.log(i)
}
console.log("value of i  "+i) // it will give an error 
//  Uncaught ReferenceError: i is not defined


// var scope 
for(var j=0;j<10;j++){
    console.log(j)
}
console.log("value of j  "+j) // it will NOT give an any error 

// OUTPUT : =>> value of j : 11 
