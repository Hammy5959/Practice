"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
`What are union types in TypeScript?`;
function validationCode(code) {
    if (code === 200) {
        return "Success ";
    }
    else if (code === 400) {
        return "Error";
    }
    else {
        return "Pending";
    }
}
let status = validationCode(209);
console.log(status);
