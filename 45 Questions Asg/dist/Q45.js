"use strict";
//Stores Car Info
function storeCarInfo(manufacturer, modelName, ...optionalInfo) {
    const carInfo = {
        manufacturer: manufacturer,
        modelName: modelName,
    };
    optionalInfo.forEach((info) => {
        Object.keys(info).forEach((key) => {
            carInfo[key] = info[key];
        });
    });
    return carInfo;
}
var car1 = storeCarInfo("Toyota", "Camry", { color: "blue" }, { year: 2022 });
console.log(car1);
function carInfo(modle, manufacturer, ...args) {
    let car = {
        modle: modle,
        manufacturer: manufacturer,
    };
    for (let i = 0; i < args.length; i += 2) {
        // car[args[i]] = args[i + 1];
    }
    return car;
}
let mycar = carInfo("Toyota", "Corolla", "Color", "Red", "Year", 2012);
console.log(mycar);
