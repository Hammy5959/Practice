

var signalColor = prompt("Traffic Signals")
if(signalColor === "Red"){
    alert(" Must Stop" )
}else if(signalColor === "Yellow"){
    alert("Ready to Move")
}else if(signalColor === "Green"){
    alert("Move Now")
}else {
    alert("Must Stop" + "\n" + "Ready to Move" + "\n" + "Move Now")
}/*


/*var materialcost = 20000
var laborcost = 2000
var totalcost = materialcost + laborcost
if(totalcost=== laborcost + materialcost){

}alert("the cost equals")*/

/*var totalmarks =300
var math = 80
var physics = 79
var english = 60
if(math >= totalmarks ){
    console.log("Grade A one")
    if(math >= totalmarks){
        console.log("Excellent")
    }
}else if(physics >= totalmarks){
    console.log("Grade A")
    if(physics >= totalmarks){
        console.log("Good")
    }
}else if(english >= totalmarks ){
       console.log("Grade B")
       if(english >= totalmarks){
        console.log("You Need To Improve")
       }
}else {
    alert("")*/


/*var score = 60
if(score >= 80 || score <= 80){
    console.log("Grade A")
    if(score >= 80 || score <= 80){
        console.log("$100")
    }
}else if(score >= 70 || score <= 70){
    console.log("Grade B")
    if(score >= 70 || ){
        console.log("$80")
    }
}else if(score >= 60){
    console.log("Grade C")
    if(score >= 60){
        console.log("$50")
    }
}else if(score >= 50){
    console.log("Grade D")
    if(score >= 50){
        console.log("$30")
    }
}else {
    console.log("Failed")
}*/


var variable1= 1
var variable2= 2
var variable3= 3


if(variable1=== 1){
    console.log(variable1)
    if(variable2 ===1){
        console.log(variable2)
    }
}else {
    console.log(variable3)
}






var score = 80
if(score > 80){
    console.log("Grade A")
    if(score > 80){
        console.log("$100")
    }
}else if(score > 70){
    console.log("Grade B")
    if(score > 70){
        console.log("$80")
    }
}else if (score > 60){
    cponsole.log("Grade C")
    if(score > 60){
        console.log("$50")
    }
}else if (score > 50){
    console.log("Grade D")
    if(score > 50){
        console.log("$30")
    }
}else{
    console.log("Fail")
}




var secretNumber = 6
var guessedNumber= prompt("Guess the secret number?")
if(guessedNumber == 6){
    alert("Bingo! Correct Answer")
}else if  (guessedNumber ===7){
    alert("Close Enough to Correct answer")
}



var input = 16
if(input == 0 || input == 2 || input == 4 || input == 6 || input == 8 || input == 10 ){
    console.log("it's even number")
}else if (input == 1 || input == 3 || input == 5 || input == 7 || input == 9){
    console.log("it's Odd Number")
}

/*var usernumber1 = prompt("write your first Number here: ")
var firstNumber = parseInt(usernumber1)
var operator = prompt("write the operator: ")
var usernumber2 = prompt("write your second Number Here")
var secondNumber = parseInt(usernumber2)
if(operator === "+"){
    console.log()
}*/


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
    console.log(firstnumber / secondnumber)*100
}