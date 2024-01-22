"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
`Write a function to find the second-largest number in an array. Sort the array in descending 
order and retrieve the second element.`;
function secondLargest(numbers) {
    const uniqueNumbers = Array.from(new Set(numbers));
    uniqueNumbers.sort((a, b) => b - a);
    return uniqueNumbers[1];
}
const arraysNumbers = [12, 56, 34, 4, 89, 2];
console.log(secondLargest(arraysNumbers));
