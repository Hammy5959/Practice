"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
`Solve a problem that requires nested loops. Nested loops are useful for handling 
two-dimensional data structures`;
for (let i = 1; i <= 5; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }
    console.log(pattern);
}
