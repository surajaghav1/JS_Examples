// Q. Print all the marks of students in objects using for loop
let student={
    ram:98,
    sham:76,
    charan:87,
    bhuvan:66
}
console.log(student)
for(let k in student){
    console.log("name : "+k+" marks : "+student[k])
}