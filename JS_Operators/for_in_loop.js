// for in loop this loop is basically used for traversing through the objects 
// it gives only keys and values of object .

let obj={
    name:"suraj",
    city:"Ahmednagar",
    age:21
}
console.log(obj)

// for traversing through this object we need "for in " =>> loop
for(let key in obj){
    console.log(key)
}

// for printing values need to use this keys 
for(let k in obj){
    console.log("key is : "+k+" and value is : "+obj[k])
}