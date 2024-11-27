// simple fucntion
function hello(){
    console.log("Hello World")
}
hello();

// parameterized function
function add(a,b){
    return "additions is "+(a+b)
}
console.log(add(10,20))

// anonymous function
let sum=()=>{ console.log("hello")}
sum()

const sub=(a,b)=>{
    return "substraaction is : "+(a-b)
}
console.log(sub(10,4))