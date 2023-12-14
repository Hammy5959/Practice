`Animals: Think of at least three different animals that have a common characteristic.
 Store the names of these animals in a list, and then use a for loop to print out the
  name of each animal. • Modify your program to print a statement about each animal,
   such as A dog would make a great pet. • Add a line at the end of your program 
   stating what these animals have in common. You could print a sentence such as
    Any of these animals would make a great pet!`


//Animals
var animalsCommonCharacteristic: string[] = ["Dog", "Cat", "Lion"];
//Print the name of each animal in list
for (let i = 0; i < animalsCommonCharacteristic.length; i++) {
  console.log(`${animalsCommonCharacteristic[i]}`);
}
//Print a Statement for each animal
for (let i = 0; i < animalsCommonCharacteristic.length; i++) {
  console.log(`A ${animalsCommonCharacteristic[i]} Would a great pet`);
}

//Printing Statement about these animals have common
console.log(
  `All of these animals share the common characteristic of motility, which means they
   are capable of moving independently.`
);
