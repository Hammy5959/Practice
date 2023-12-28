"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
`Write a function that takes an array of numbers and returns a new array with only the even
 numbers from the original array.`;
function envenNumberArray(numbers) {
    return numbers.filter((number) => number % 2 == 0);
}
let originalArray = [2, 5, 6, 7, 8, 10, 60, 56,];
let evenArray = envenNumberArray(originalArray);
console.log(`Original Numbers Array: ${originalArray}`);
console.log(`Even Numbers Array: ${evenArray}`);
