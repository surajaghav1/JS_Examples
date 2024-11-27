// number divisible by 2 and 3

let num=prompt("enter a number")
num=parseInt(num)
if(num%2==0 && num%3==0){
    alert("given number is divisible by 2 and 3 ")
}
else{
    alert("number NOT divisible by 2 and  3")
}


// number divivsible by 2 or 3
if(num%2==0 || num%3==0){
    alert("given number is divisible by 2 or 3 ")
}
else{
    alert("number NOT divisible by 2 and  3")
}