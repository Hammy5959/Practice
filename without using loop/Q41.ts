`Magicians: Make a array of magician’s names. Pass the array to a function called 
show_magicians(), which prints the name of each magician in the array.`;

function show_magicians(magicians: string[]) {
  magicians.forEach((magician) => console.log(`${magician}`));
}
var magicians: string[] = ["Edward", "David", "Alice", "Anthony"];
show_magicians(magicians);
export {};
