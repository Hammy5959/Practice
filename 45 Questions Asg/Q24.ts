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
var favSubject: string = "Urdu";
console.log("Is favSubject == Urdu? i predict True");
console.log(favSubject == "Urdu");

//More Conditional Tests
var favSubject: string = "Urdu";
console.log("Is favSubject != Urdu? i predict False");
console.log(favSubject != "Urdu");

//Test Using Lower case function
var myName: string = "HAMID";
console.log(`myName.toLowerCase() == "hamid" I predict true`);
console.log(myName.toLowerCase() == "hamid");

//Numerical Values Tests
//Inequality
var numerical: boolean = 59 != 59;
console.log("is 59 != 59? i predict False");
console.log(numerical);

//Equality
var num: number = 69;
console.log("is num === 69? i predict true");
console.log(num === 69);

//Greater than
var marks: number = 70;
var totalMarks: boolean = marks > 80;
console.log("is marks > 80 ? i predict false")
console.log(totalMarks);

//Less than
var marks: number = 80;
var obtainedMarks: boolean = marks < 85;
console.log("is marks < 85? i predict? true")
console.log(obtainedMarks);

//Greater than Or Equal to
var score: number = 120;
var goal: number = 100;
console.log("is goal >= score? i predict true");
console.log(goal >= score);

//Less than Or Equal to
var score: number = 150;
var goal: number = 110;
console.log(goal <= score);

// And And Operator
var score1: number = 250;
var goal1: number = 150;
var T = goal1 >= score1 || goal1 <= score1;
console.log(T);

//Or Operator
var score1: number = 250;
var goal1: number = 150;
var z = goal1 >= score1 || goal1 <= score1;
console.log(z);

//Test wether in Array or not in  Array
var array: number[] = [1, 2, 3, 4, 5];
var element = 4;
if (array.includes(element)) {
  console.log(`${element} is in array`);
} else {
  console.log(`${element} is not in array`);
}
