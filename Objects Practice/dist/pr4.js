"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
`Cars: Write a function that stores information about a car in a Object. The function should
 always receive a manufacturer and a model name. It should then accept an arbitrary number of
  keyword arguments. Call the function with the required information and two other name-value 
  pairs, such as a color or an optional feature. Print the Object that’s returned to make sure
   all the information was stored correctly.`;
function createCar(manufacturer, modelName, ...options) {
    const car = {
        manufacturer,
        modelName,
    };
    options.forEach((option, index) => {
        // Alternately, you can use destructuring to handle key-value pairs.
        if (index % 2 === 0 && options[index + 1] !== undefined) {
            const key = options[index];
            const value = options[index + 1];
            car[key] = value;
        }
    });
    return car;
}
// Example usage:
const myCar = createCar("Toyota", "Camry", "color", "blue", "optionalFeature", "sunroof");
console.log(myCar);
