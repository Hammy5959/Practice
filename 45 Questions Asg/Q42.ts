`Great Magicians: Start with a copy of your program from Exercise 39. Write a 
function called make_great() that modifies the array of magicians by adding the
 phrase the Great to each magician’s name. Call show_magicians() to see that the 
 list has actually been modified.`;

function make_great1(magicians: string[]) {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = ("The Great" + " " + magicians[i]);
  }
}
function show_magicians1(magicians: string[]) {
  for (let i = 0; i < magicians.length; i++) {
    console.log(magicians[i]);
  }
}
var magicians = ["Edward", "David", "Alice", "Anthony"];

make_great1(magicians);
show_magicians1(magicians);
