let age=prompt("enter your age ") 
// prompt is always in string format
console.log(age," type of age is ",typeof age)
// for performing operations on this we need to convert or typcast it string to number 

age=parseInt(age)
console.log(age, " type of age is : ", typeof(age))  // it have a number type 

if(age>10 && age<=20){
    console.log("you are between 10 to 20")
}
else{
    console.log("You are greater than 20 or smaller than 10")
}