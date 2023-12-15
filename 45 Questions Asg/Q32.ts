`Checking Usernames: Do the following to create a program that simulates how websites
 ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the
new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used.
 If it has, print a message that the person will need to enter a new username. If a
 username has not been used, print a message saying that the username is available.`;

//checking User Names
var current_users: string[] = [
  "Hamid",
  "Sheikh",
  "Numan",
  "Muzammil",
  "Hassan",
];
var new_users: string[] = [
  "Abdullah",
  "Sheikh",
  "Abdurrehman",
  "Muzammil",
  "Adeel",
];
for (var i = 0; i < new_users.length; i++) {
  if (current_users.includes(new_users[i])) {
    console.log(
      `this user name ${new_users[i]} has already taken You need to enter a new user name`
    );
  } else {
    console.log(`this user name ${new_users[i]} is Available`);
  }
}
