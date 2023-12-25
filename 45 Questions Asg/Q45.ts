`Cars: Write a function that stores information about a car in a Object. The function should 
always receive a manufacturer and a model name. It should then accept an arbitrary number of 
keyword arguments. Call the function with the required information and two other name-value 
pairs, such as a color or an optional feature. Print the Object that's returned to make sure
 all the information was stored correctly.`;

function storeCarInfo(
  manufacturer: string,
  modelName: string,
  ...args: any[]
): object {
  let car = {
    manufacturer: manufacturer,
    model: modelName,
  };
  for (let i = 0; i < args.length; i += 2) {
    car[args[i]] = args[i + 1];
  }
  return car;
}

let car1 = storeCarInfo("Toyota", "Camry", "color", "red", "year", 2022);
let car2 = storeCarInfo(
  "Honda",
  "Civic",
  "color",
  "blue",
  "year",
  2021,
  "sunroof",
  true
);

console.log(car1);
console.log(car2);
