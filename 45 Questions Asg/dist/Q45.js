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
