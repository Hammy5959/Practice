var operators = prompt("Enter Operator (+ , - , * , % , /) ")
var firstnumber = parseInt(prompt("Enter First Number"))
var secondnumber = parseInt(prompt("Enter Second Number"))
if(operators == "+"){
    alert(firstnumber + secondnumber)
}else if(operators == "-"){
    alert(firstnumber - secondnumber)
}else if(operators == "*"){
    alert(firstnumber * secondnumber)
}else if(operators == "%"){
    alert(firstnumber % secondnumber)
}else if(operators == "/"){
    alert(firstnumber / secondnumber)
}
