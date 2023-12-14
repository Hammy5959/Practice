//Shrinking Guest List: You just found out that your new dinner table won’t arrive in
//time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message
//saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list.
// Each time you pop a name from your list, print a message to that person letting
// them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know
// they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your
//list to make sure you actually have an empty list at the end of your program.

//Guests List
var guestsList: string[] = ["Abdullah", "Furqan", "Adeel"];
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
  console.log(
    `${guestsList[a]} i found a bigger dinner table so please come to home my home`
  );
}
//Shrinking Guests
console.log("I can invite only two people for dinner");
while (guestsList.length > 2) {
  var removed_Guests = guestsList.pop();
  console.log(`${removed_Guests} I am sorry You're not invited for dinner`);
}
console.log(
  `${guestsList[0]} ${guestsList[1]} you're Still invited for dinner`
);
guestsList.pop();
guestsList.pop();
console.log(guestsList);
guestsList.splice(1, guestsList.length);
