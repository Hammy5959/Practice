//Named function with optional and default parameters
//(Note that the parameter type will be optional when used with default value)
function buildName(firstName: string, lastName = "Maqsood"): string {
  if (lastName) return `${firstName} ${lastName}`;
  else return firstName;
}

let result1 = buildName("Hamid"); //works correctly because last parameter is optional
//let result2 = buildName("Hamid", "Maqsood", "Sr.");  //error, too many parameters
let result3 = buildName("Sheikh", "Hamid"); //correct

console.log(result1);
console.log(result3);

//anonymous function type with default parameters
//(Note that the parameter type will be optional when used with default value)
let buildName1: (firstName: string, lastName?: string) => string = function (
  firstName: string,
  lastName = "Hammy"
): string {
  if (lastName) return `${firstName} ${lastName}`;
  else return firstName;
};
let name1 = buildName1("Sheikh"); //correct
let name2 = buildName1("Sheikh", "Hamid"); //correct
//let name3 = buildName1("Sheikh","Hamid","59") //Error because expected 1 or 2 arguments but got 3
console.log(name1)
console.log(name2)

