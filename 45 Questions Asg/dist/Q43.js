"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
`Unchanged Magicians: Start with your work from Exercise 40. Call the function
 make_great() with a copy of the array of magicians’ names. Because the original 
 array will be unchanged, return the new array and store it in a separate array. 
 Call show_magicians() with each array to show that you have one array of the original
  names and one array with the Great added to each magician’s name.`;
function make_great1(magicians) {
    return magicians.map((magician) => `The Great ${magician}`);
}
function show_magicians(magicians) {
    magicians.forEach((magician) => console.log(magician));
}
var magiciansName = ["Edward", "David", "Alice", "Anthony"];
show_magicians(magiciansName);
show_magicians(make_great1(magiciansName));
