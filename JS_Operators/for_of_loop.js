// for of loop =>> this is used to traverse through iterable object. like string , array
// it is not used in object 

let obj={
    name:"suraj",
    city:"Ahmednagar",
    age:21
}
console.log(obj)

for(let a of obj){
    console.log(a)
    }
    // error occured 
// Uncaught TypeError: obj is not iterable
   

// for of loop is used in array and string
let arr=["abc","xyz","pqr"]
console.log(arr)
for(let a of arr){
    console.log(a)
}

// if we are traversing through for in loop in array it will give key automatically

for(let a in arr){
    console.log(a+" and  : "+arr[a])}

  /*   OUTPUT =>> 
  0and  : abc
  1and  : xyz
 2and  : pqr
*/