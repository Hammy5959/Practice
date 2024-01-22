"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
`Implement a program that checks if a given year is a leap year. Leap years have specific
 conditions, such as being divisible by 4 but not by 100 unless also divisible by 400.`;
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log(isLeapYear(2023));
