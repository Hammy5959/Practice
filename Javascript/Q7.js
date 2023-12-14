//Calculator

var operator = prompt ("enter operator(either + , - , * , / & %)") 
var firstnumber = parseFloat (prompt("enter first number: "))
var secondnumber= parseFloat(prompt("enter second number: " ))
if(operator =="+"){
    console.log(firstnumber + secondnumber)
}else if (operator == "-"){
    console.log(firstnumber - secondnumber)
}else if (operator == "*"){
    console.log(firstnumber * secondnumber)
}else if(operator == "/"){
    console.log(firstnumber / secondnumber)
}else if (operator == "%"){
    console.log(firstnumber % secondnumber)
}