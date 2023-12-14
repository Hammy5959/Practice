var totalmarks=300
var physics = 80
var english = 79
var math = 60
var obtainedmarks=219
console.log("totalmarks :"+totalmarks)
console.log("obtainedmarks :"+obtainedmarks)
let percentage=(obtainedmarks / totalmarks)*100
console.log("percentage :" +percentage+ "%")
if(percentage >= 80){
    console.log(" Grahde :A one")
    if(percentage >= 80){
        console.log("Excellent")
    }
}
else if(percentage >= 70){
    console.log("Grade : A")
    if(percentage >= 70){
        console.log("remarks :"+"good")
    }
}
else if(percentage >= 60){
    console.log("Grade :B")
    if(percentage >= 60){
        console.log("you need to improve")
    }
}
if(percentage < 60){
    console.log("fail")
    if(percentage < 60){
        console.log("sorry")
    }
}
