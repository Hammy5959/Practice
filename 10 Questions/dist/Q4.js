"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
`Write a function that takes a string and returns the number of vowels in the string.`;
function stringVowels(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            console.log(count++);
        }
    }
    return count;
}
let vowels = ["a", "e", "i", "o", "u"];
console.log(stringVowels(vowels));
