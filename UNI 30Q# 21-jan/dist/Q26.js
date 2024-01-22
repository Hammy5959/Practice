"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
`Write a function that uses rest parameters to calculate the sum of an arbitrary number of
 arguments. This allows flexibility in the number of arguments.`;
var sumAllNumbers = function (...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
};
let sumNumbers = sumAllNumbers(1, 2, 3, 4, 5, 78);
console.log(sumNumbers);
