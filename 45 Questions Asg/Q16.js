"use strict";
//More Guests: You just found a bigger dinner table, so now more space is available.
// Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your
// program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest
// to the end of your list. • Print a new set of invitation messages, one for each
// person in your list.
//GUests List
var guestsList = ["Abdullah", "Furqan", "Adeel"];
for (let a = 0; a < guestsList.length; a++) {
    console.log(`${guestsList[a]} please come to my home at dinner`);
}
var removedGuest = "Furqan";
console.log(`${removedGuest} Can't make it`);
var removedGuestIndex = guestsList.indexOf(removedGuest);
guestsList[removedGuestIndex] = "Numan";
for (let i = 0; i < guestsList.length; i++) {
    console.log(`${guestsList[i]} Still invited For dinner`);
}
//More Guests
console.log("I found a bigger dinner table");
guestsList.unshift("Salman");
guestsList.splice(2, 0, "Muzammil");
guestsList.push("Hassan");
for (let a = 0; a < guestsList.length; a++) {
    console.log(`${guestsList[a]} i found a bigger dinner table so please come to home my home`);
}
