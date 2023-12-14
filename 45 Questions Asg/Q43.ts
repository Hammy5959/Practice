`Unchanged Magicians: Start with your work from Exercise 40. Call the function
 make_great() with a copy of the array of magicians’ names. Because the original 
 array will be unchanged, return the new array and store it in a separate array. 
 Call show_magicians() with each array to show that you have one array of the original
  names and one array with the Great added to each magician’s name.`;

function make_great(magicians: string[]) {
  var great_magicians = [];
  for (let i = 0; i < magicians.length; i++) {
    great_magicians.push(`the Great, ${magicians[i]}`);
  }
  return great_magicians;
}

function show_magicians3(magicians: string[]) {
  for (let i = 0; i < magicians.length; i++) {
    console.log(magicians[i]);
  }
}

var magicians = ["Edward", "David", "Alice", "Anthony"];
var great_magicians = make_great(magicians);
show_magicians3(magicians);
show_magicians3(great_magicians);
