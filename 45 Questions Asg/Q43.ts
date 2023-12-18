`Unchanged Magicians: Start with your work from Exercise 40. Call the function
 make_great() with a copy of the array of magicians’ names. Because the original 
 array will be unchanged, return the new array and store it in a separate array. 
 Call show_magicians() with each array to show that you have one array of the original
  names and one array with the Great added to each magician’s name.`;

function make_great1(magicians: string[]) {
  return magicians.map((magician) => `The Great ${magician}`);
}
function show_magicians(magicians: string[]) {
  magicians.forEach((magician) => console.log(magician));
}
var magiciansName: string[] = ["Edward", "David", "Alice", "Anthony"];
show_magicians(magiciansName);
show_magicians(make_great1(magiciansName));

export {};
