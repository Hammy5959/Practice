"use strict";
/*
//My Program
function myProgram(input: string) {
  // Your program logic here
}

const userInput = "example"; // Replace with user input
myProgram(userInput);*/
//Practice
function dayOfTheWeek1(day) {
    //switch Statement
    switch (day) {
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 7:
            return "Sunday";
    }
}
//Practice 2
function providedAge1(age) {
    switch (true) {
        case age >= 0 && age <= 12:
            return "Person is Child";
        case age >= 13 && age <= 19:
            return "Person is Teenager";
        default:
            return "Person is Adult";
    }
}
console.log(providedAge1(22));
