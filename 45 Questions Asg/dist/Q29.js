"use strict";
`Favorite Fruit: Make a array of your favorite fruits, and then write a series of
 independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is
 in your array. If the fruit is in your array, the if block should print a statement,
 such as You really like bananas!`;
//Fav Fruits
//Statement #1
var fav_Fruits = ["Mango", "Watermellon", "Grapes"];
if (fav_Fruits.includes("Mango")) {
    console.log("I really like Mango");
}
//Statement #2
if (fav_Fruits.includes("Watermellon")) {
    console.log("I really like Watermellon");
}
//Statement #3
if (fav_Fruits.includes("Grapes")) {
    console.log("I really like Grapes");
}
//Statement #4
if (fav_Fruits.includes("Banana")) {
    console.log("I really like Banana");
}
//Statement #5
if (fav_Fruits.includes("Coconut")) {
    console.log("I really like Coconut");
}
