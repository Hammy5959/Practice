//OPERATORS

//(AND) && Oprators

var a= 56
var b= a > 45 && a < 67
console.log(b)

//(OR)pipeline Operators

var a = 50
var k = a < 40 || a > 45
console.log(k)

var a = 50
var b = 60
var h = a > 60 && a > 40 || a < b
console.log(h)

//(NOT)! Operators

var a = 60
var b = !(a < 70)
console.log(b)

var a = 60
var b = 40
var c = !(a < b)
console.log(c)

var a = 30
var b = a > 100 || a > 40
var c = !b
console.log(c)

var a = 40 
var b = 60
var c = a < b && a > 30
var d = !c
console.log(d)
 
var a = 60
var b = 50
var c = a < b || a > b
var d = !c
var e = !(a < b)
console.log("A = "+a)
console.log("B = "+b)
console.log("C = "+c)
console.log("D = "+d)
console.log("E ="+e)

//Double !!NOT

var a = 6
var b = !a
var c = !!a
console.log("A = "+a)
console.log("B = "+b)
console.log("C = "+c)

var a = 70
var b = 60
var c = a < b || a > b 
var d = !!c
console.log("A = "+a)
console.log("B = "+b)
console.log("C = "+c)
console.log("D = "+d)

var age = 50
var age2 = 70
if(age > age2){
    console.log("in if Age "+age)
}
else{
    console.log("in else Age "+age)
}

var score = 30
var score2 = 40
var final = score > score2 && score < score2 && score > 50
if(score > score2 || score < score2){
    console.log("in if Final " +final)
} else {
    console.log("in else Final "+final)
}

var a = 50
var b = 40
var c = a && b
if(a > b || a < b){
     console.log(" in if C "+c)
} else {
    console.log("in else C "+c)
}

var score = 60
if(score > 80){
    console.log("Grade A")
} else if (score > 70){
    console.log(" Grade C")
} else if(score > 60){
    console.log("Grade C")
} else {
    console.log("Failed")
}

var age =  ("what is my age?")
  age= parseInt(age)
var FatherAge= 60
var MotherAge= 50
var SisterAge= 23
if(age > FatherAge ){
    console.log("No")
} else if(age > MotherAge){
    console.log("No") 
} else if(age > SisterAge){
    console.log("No")
} else {
    console.log("i am Smaller in my family")
}

//Nested if
var score = 25
if(score > 80){
    console.log("Grade A")
    if(score > 80){
        console.log("$100")
    }
}else if(score > 50){
    console.log("Grade B")
    if(score > 50){
        console.log("$70")
    }
} else if (score > 30){
    console.log("Grade C")
    if(score > 30){
    console.log("$30")
    }
}else {
    console.log("Failed")
}

var score = 81
if(score > 90){
    console.log("Grade A")
    if(score > 90){
        console.log("1000")
    }
}else if(score > 80){
    console.log("Grade B")
    if(score > 80){
        console.log("700")
    }
}else if(score > 60){
    console.log("Grade C")
    if(score > 60){
    console.log("500")
    }
}else {
    console.log("Failed")
}

//Conditions with Logical Operators 

var score = 70
if(score > 80 && score < 100 ){
    console.log("Grade A")
}else if(score > 60 && score > 100){
    console.log("Grade B")
}else if(score < 80 || score < 60){
    console.log("Grade C")
}else {
    console.log("Failed")
}

//Vowels
var input= "A"
if(input == "A" || input == "E" || input == "I" || input == "O" || input == "U"){
    console.log("it's a Vowel")
}else if(input == "M"){
    console.log("Vowel")
}else{
    console.log("it's not a consonants")
}

var input = "M"
if(input == "A" || input == "M" || input == "I" || input == "O" || input == "U"){
    console.log("Its a vowel")
}

var a = 60
if(a > 70){
    console.log("Grade A")
    if(a > 70){
        console.log("100")
    }
}else if(a > 40){
    console.log("Grade C")
    if(a > 40){
     console.log("50")   
    }
}else{
    console.log("ok")
}