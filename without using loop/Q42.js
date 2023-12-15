"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
`Great Magicians: Start with a copy of your program from Exercise 39. Write a 
function called make_great() that modifies the array of magicians by adding the
 phrase the Great to each magician’s name. Call show_magicians() to see that the 
 list has actually been modified.`;
function make_great1(magicians) {
    return magicians.map((magician) => `The Great ${magician}`);
}
function show_magicians1(magicians) {
    magicians.forEach((magician) => console.log(magician));
}
var magicians = ["Edward", "David", "Alice", "Anthony"];
var greatMagicians = make_great1(magicians);
show_magicians1(greatMagicians);
