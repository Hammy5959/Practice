"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Q1
var named = "Hamid Maqsood";
console.log(named);
//Q2
function sum(num1, num2) {
    return num1 + num2;
}
let sumNumbers = sum(58, 1);
console.log(sumNumbers);
//Q3
var givenNumber = 11;
if (givenNumber % 2 == 0) {
    console.log(`Given Number is Even`);
}
else if (givenNumber % 2 !== 0) {
    console.log(`Given Number is Odd`);
}
//Q4
function stringConcatenates(name1, name2) {
    return name1 + name2;
}
let fullName = stringConcatenates("Hamid", "Maqsood");
console.log(fullName);
//Q5
function areaCalculation(width, length) {
    let areaFind = width * length;
    console.log(areaFind);
}
areaCalculation(30, 20);
// Q6
function stringPalindromeCheck(str) {
    let checkString = str.split("").reverse().join(" ");
    return str === checkString;
}
console.log(stringPalindromeCheck("Hamid"));
var bookInfo = {
    title: "Typescript",
    author: "Goldberg",
};
console.log(`Book Title:${bookInfo.title}\nBook Author:${bookInfo.author}`);
var bookDetails = {
    name: "Typescript",
    author: "Goldgerg",
    topic: "Programming",
};
console.log(`Book Name:${bookDetails.name}\nBook Author:${bookDetails.author}\nBook Topic:${bookDetails.topic}`);
var personInfo = {
    name: "Hamid Maqsood",
    age: 22,
    address: "Awan Town",
};
console.log(`Person Name:${personInfo.name}\nPerson Age:${personInfo.age}\nPerson Address:${personInfo.address}`);
//Arrays
//Q10
var fruits = [
    "Orange",
    "Watermellon",
    "Apple",
    "PineApple",
    "Grapes",
];
for (let i = 0; i < fruits.length; i++) {
    console.log(`${fruits[i]}`);
}
//Q11
function averageValueofNumbers(num) {
    var sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += num[i];
    }
    return sum / num.length;
}
let averageValue = [20, 78, 89, 5, 67, 78, 90, 67, 89, 10];
console.log(averageValueofNumbers(averageValue));
//Q12
var fruits1 = ["Grapes", "Apple", "Peach"];
var fruits2 = ["Watermellon", "Guava", "Mango"];
var arrayConcate = fruits1.concat(fruits2);
console.log(arrayConcate);
//Q13
function envenNumberArray(numbers) {
    return numbers.filter((number) => number % 2 == 0);
}
let originalArray = [2, 5, 6, 7, 8, 10, 60, 56];
let evenArray = envenNumberArray(originalArray);
console.log(`Original Numbers Array: ${originalArray}`);
console.log(`Even Numbers Array: ${evenArray}`);
//Q14
const words = ["Peach", "Apple", "Mango", "Watermellon"];
const wordsLength = words.map((words) => words.length);
console.log(wordsLength);
//Q15
function positiveNumbersCheck(number) {
    return number.every((num) => num > 0);
}
let numArray = [89, -89];
console.log(positiveNumbersCheck(numArray));
//Q16
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
//Q17
let count = 10;
while (count >= 1) {
    console.log(count);
    count--;
}
//Q18
let numArrays = [1, 2, 4, 5, 59, 48];
let findIndex = numArrays.indexOf(59);
console.log(findIndex);
//Q19
function delayMeassage(message) {
    setTimeout(message, 2000);
}
delayMeassage(() => {
    console.log("Hello Iam From Panaverse");
});
//Q20
function withCallback(value, callback) {
    const result = value * 2;
    callback(result);
}
withCallback(5, (result) => {
    console.log(`Result: ${result}`);
});
//Q21
function delayMeassagePromises() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello I am data from Promise");
        }, 4000);
    });
}
delayMeassagePromises().then((message) => {
    console.log(message);
});
function delayMeassagePromises2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello i am Hamid");
        }, 4000);
    });
}
delayMeassagePromises2().then((message) => {
    console.log(message);
});
//Q22
function sequentialPromises() {
    return delayMeassagePromises()
        .then((message1) => {
        console.log(message1);
        return delayMeassagePromises();
    })
        .then((message2) => {
        console.log(message2);
        return "All promises resolved";
    });
}
// Example usage
sequentialPromises().then((finalMessage) => {
    console.log(finalMessage);
});
//Q23
let promise1 = delayMeassagePromises();
let promise2 = delayMeassagePromises2();
Promise.all([promise1, promise2]).then((message) => {
    console.log(message);
});
//Q24
var defaultParameter = (name = "Hamid Maqsood") => name;
console.log(defaultParameter());
