//Changing Guest List: You just heard that one of your guests can’t make the dinner,
//so you need to send out a new set of invitations. You’ll have to think of someone
//else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your
// program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name
// of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your
// list.

//Guests List
var guestsList: string[] = ["Abdullah", "Furqan", "Adeel"];
for (let a = 0; a < guestsList.length; a++) {
  console.log(`${guestsList[a]} please come to my home to dinner`);
}
//Changing Guest List
var removedGuest = "Furqan";
console.log(`${removedGuest} Can't make it`);

var removedGuestIndex = guestsList.indexOf(removedGuest);
guestsList[removedGuestIndex] = "Numan";

for (let i = 0; i < guestsList.length; i++) {
  console.log(`${guestsList[i]} Still invited For dinner`);
}
