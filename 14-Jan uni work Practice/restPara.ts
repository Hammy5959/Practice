//Example of rest parameter with Anonymous function
var pizzaItems: (item1: string, ...items: string[]) => string = function (
  myfavFlavour: string,
  ...anotherFlavours: string[]
): string {
  return `My Favourite Flavour:${myfavFlavour}, Another Flavours:${anotherFlavours.join(
    " "
  )}`;
};
console.log(pizzaItems("Lasania", "BarBQ", "Fajita", "Tikka")); //in the rest parameter unlimited arguments
//Example 2
function buildName(firstName: string, ...restOfName: string[]) {
  //Named function with Rest parameters
  return `${firstName} ${restOfName.join(" ")}`;
}

var employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");

//anonymous function type with Rest parameters
var buildNameFun: (fname: string, ...rest: string[]) => string = function (
  firstName: string,
  ...restOfName: string[]
) {
  return `${firstName} ${restOfName.join(" ")}`;
};

//Note: Rest, optional and default parameters can only
// be at the end of the parameter list
