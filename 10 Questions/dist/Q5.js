"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
`Write a function that takes an array of numbers and returns the largest number in the array.`;
function findLargestNumber(arr) {
    let largestNumber = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largestNumber) {
            largestNumber = arr[i];
        }
    }
    return largestNumber;
}
let numbersArray = [23, 23, 4, 5, 6, 67, 7, 4, 56, 57, 4, 6];
console.log(findLargestNumber(numbersArray));
