"use strict";
/*Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza
names in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of
printing just the name of the pizza. For each pizza you should have one line of output
 containing a simple statement like I like pepperoni pizza.
• Add a line at the end of your program, outside the for loop, that states how much
 you like pizza. The output should consist of three or more lines about the kinds of
  pizza you like and then an additional sentence, such as I really love pizza!*/
//Fav Pizza
var pizza_name = ["Lasania", "Fajita", "BarBQ"];
for (var i = 0; i < pizza_name.length; i++) {
    console.log(pizza_name[i]);
}
for (let i = 0; i < pizza_name.length; i++) {
    console.log(`I like ${pizza_name[i]} flavour pizza`);
}
console.log("i Really like Lasania Flavour pizza" + "\n" + "I Love to eating Fajita Flavour pizza" + "\n" + "I like BarBQ Flavour Pizza");
