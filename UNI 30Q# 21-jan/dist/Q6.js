"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Q6
function stringPalindromeCheck(str) {
    let checkString = str.split("").reverse().join(" ");
    return str === checkString;
}
console.log(stringPalindromeCheck("Hamid"));
