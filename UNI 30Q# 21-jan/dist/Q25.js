"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
`Create an array of objects and sort them based on a specific property. Utilize the sorted 
function and a lambda function as the key.`;
const objects = [
    {
        name: "Hamid",
        age: 22,
    },
    {
        name: "Yasir",
        age: 28,
    },
    {
        name: "Hamid",
        age: 23,
    },
];
let sortedOjects = objects.sort((a, b) => a.age - b.age);
console.log(sortedOjects);
