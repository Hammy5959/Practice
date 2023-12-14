"use strict";
console.log('Hello i am hamid');
let firstname = "hamid";
let lastName = "maqsood";
console.log(firstname);
console.log(firstname);
console.log(lastName);
let n = 1100;
if (n % 2 == 0) {
    console.log("evennumber");
}
else if (n % 2 !== 0) {
    console.log("oddnumber");
}
var myName = "hamid";
var hello = "hello" + myName;
console.log(hello); //hello hamid
let testVariable = 1233445689;
console.log(typeof testVariable);
//Arithmetic operators:
//Addition
let n3 = 1;
let n4 = 2;
console.log(n3 + n4); //3
let str1 = "1";
let str2 = "2";
console.log(str1 + str2); //12
//Substractions
let n1 = 5;
let n2 = 2;
console.log(n1 - n2); //3
//Multiplication
let h1 = 5;
let h2 = 2;
console.log(h1 * h2); //10
//Division
let g1 = 4;
let g2 = 2;
console.log(g1 / g2); //2
//Exponentiation
let j1 = 2;
let j2 = 2;
console.log(j1 ** j2); //4
//Arithmetics operators
//Modulus
let k1 = 10;
let k2 = 3;
console.log(k1 % k2); //1
//Assighment operators
let z = 5;
console.log(z); //5
z += 5;
console.log(z); //10
z -= 5;
console.log(z); //5
//Comparison operators
let m = 5;
console.log(m == 5); //trus
console.log(m === 5); //true
console.log(m != 5); //false
console.log(m > 8); //false
console.log(m < 8); //true
console.log(m >= 8); //false
console.log(m <= 8); //true
//logical operator
let l = 5;
console.log(l >= 5 && l < 10); //true
console.log(l > 5 && l < 10); //false
console.log(l >= 5 || l < 10); //true
console.log(l > 5 || n < 10); //false
console.log(!(l < 10)); //false
console.log(!(l > 10)); //true
//Arrow functions
let sum1 = (x, y) => {
    return x + y;
};
sum1(10, 20); //returns30
let sum2 = (x, y) => x + y; //can skip return
sum2(3, 4); //returns7
//if Else and Else if statements-Examples
//Else If-Example
let x = prompt("where does the hamid live?");
let correctAnswer = "pakistan";
if (x == correctAnswer) {
    alert("Correct!");
}
else if (x == "pakistan") {
    alert("Close!");
}
else {
    alert("Wrong");
}
//If Example
let o = prompt("Where does the hamid live?");
let correctanswer = "pakistan";
if (o == correctanswer) {
    alert("Correct!");
}
//Else Example
let a = prompt("Where does the pope live?");
let correctAnswers = "pakistan";
if ("a==correctanswers") {
    alert("Correct");
}
else {
    alert("Wrong");
}
//Ticketing system
let country = prompt("where do you live?");
//Number() function is used to convert the string to number
let age = Number(prompt("what's your age?"));
//Array 
let fruit1 = "apple";
let fruit2 = "banana";
let fruit3 = "grapes";
let fruit4 = "strawberry";
let fruit5 = "orange";
//here the array help to multiple data store in the single variable
let fruits = ["apple", "banana", "grapes", "strawberry", "orange"];
let fruit = ["apple", "banana", "grapes", "strawberry", "orange"];
fruits[0]; //apple
fruits[3]; //grapes
let c = [1, 2, "daniyal"]; //arrays can store multiple types of data
//Arrays:Adding and removing elements
//Examples
var pets = [];
pets[0] = "dog"; //adds "dog" to an array at 0 index
pets[1] = "cat"; //adds "cat" to an array at 1 index
pets.pop(); //removes last element of an array which is cat in our case
pets.push("parrot"); //adds a new element to an array 
var pets = [];
pets[0] = "dog"; //adds "dog" to an array at 0 index
pets[1] = "cat"; //adds "cat" to an array at 1 index
pets.shift(); //removes the first element of an array which is cat in our case 
pets.unshift("[parrot"); //adds a new element to an array (at beginning)
//Arrays splicings
//Examples 
const fruites = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
//adds elements to an array at 2nd index 
//deleted 0 elements
//Example2
const frauts = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1); //[Orange,Lemon,Apple,Mango]
const person = {
    name: "Hamid",
};
for (let i = 0; i < 3; i++) {
    console.log("hello world");
}
for (let i = 0; i < 3; i++) {
    console.log("hello world" + i);
}
