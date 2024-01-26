"use strict";
`Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable
 called alien_color and assign it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green. If it is, 
print a message that the player just earned 5 points.
• Write one version of this program that passes the if test and another that fails.
 (The version that fails will have no output.)`;
//Alien colors #1
var alien_color = "green";
if (alien_color === "green") {
    console.log("Player just Earned 5 points ");
}
//Failing versions
var alien_color = "red";
if (alien_color === "green") {
    console.log("Lose");
}
var alien_color = "yellow";
if (alien_color === "green") {
    console.log("Lose");
}
