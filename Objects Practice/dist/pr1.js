"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function carinfo(manufacture, carname, sale) {
    let info = {
        manufacture: manufacture,
        carname: carname,
        sale: sale,
    };
    console.log(`Car Name: ${info.manufacture}\nManufacture: ${info.carname}\nIs Sale? ${info.sale}`);
    return info;
}
carinfo("Honda", "Civic", true);
function printPerson(person) {
    console.log(`Name: ${person.name}, Age: ${person.age}`);
}
const personName = { name: "Hamid", age: 22 };
printPerson(personName);
