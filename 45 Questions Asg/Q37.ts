`Large Shirts: Modify the make_shirt() function so that shirts are large by default 
with a message that reads I love TypeScript. Make a large shirt and a medium shirt
 with the default message, and a shirt of any size with a different message.`

//Shirts Function
function make_shirt2(shirt: string="Large", message: string="It's Comfortable") {
  console.log(`The shirt size is ${shirt} and the message ${message}`);
}
//Shirts Sizes
make_shirt2();
make_shirt2("Medium");
make_shirt2("Small", "this shirt is loose");
