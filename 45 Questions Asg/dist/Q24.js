"use strict";
//More Conditional Tests: You don’t have to limit the number of tests you create to 10.
// If you want to try more comparisons, write more tests. Have at least one True and 
//one False result for each of the following:
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, 
//greater than or equal to, and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array
//Tests for equality and inequality
var favSubject = "Urdu";
console.log("Is favSubject == Urdu? i predict True");
console.log(favSubject == "Urdu");
//More Conditional Tests
var favSubject = "Urdu";
console.log("Is favSubject != Urdu? i predict False");
console.log(favSubject != "Urdu");
//Test Using Lower case function
var myName = "HAMID";
console.log(`myName.toLowerCase() == "hamid" I predict true`);
console.log(myName.toLowerCase() == "hamid");
//Numerical Values Tests
//Inequality
var numerical = 59 != 59;
console.log("is 59 != 59? i predict False");
console.log(numerical);
//Equality
var num = 69;
console.log("is num === 69? i predict true");
console.log(num === 69);
//Greater than
var marks = 70;
var totalMarks = marks > 80;
console.log("is marks > 80 ? i predict false");
console.log(totalMarks);
//Less than
var marks = 80;
var obtainedMarks = marks < 85;
console.log("is marks < 85? i predict? true");
console.log(obtainedMarks);
//Greater than Or Equal to
var score = 120;
var goal = 100;
console.log("is goal >= score? i predict true");
console.log(goal >= score);
//Less than Or Equal to
var score = 150;
var goal = 110;
console.log(goal <= score);
// And And Operator
var score1 = 250;
var goal1 = 150;
var T = goal1 >= score1 || goal1 <= score1;
console.log(T);
//Or Operator
var score1 = 250;
var goal1 = 150;
var z = goal1 >= score1 || goal1 <= score1;
console.log(z);
//Test wether in Array or not in  Array
var array = [1, 2, 3, 4, 5];
var element = 4;
if (array.includes(element)) {
    console.log(`${element} is in array`);
}
else {
    console.log(`${element} is not in array`);
}
