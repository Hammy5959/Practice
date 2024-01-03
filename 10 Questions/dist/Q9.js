"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
`Write a TypeScript function that takes a string as input and returns the string reversed.`;
function reverseString(String) {
    return String.split("").reverse().join("");
}
let string = "Hello Hamid";
console.log(reverseString(string));
