"use strict";
//Check Temprature and Sugges Clothes
function suggestClothes(temprature) {
    // switch statement
    switch (true) {
        case temprature < 0:
            return `It's cold outside. You should wear a warm jacket, gloves, and a hat.`;
        case temprature < 10:
            return `It's cool outside. You should wear a light jacket or sweater.`;
        case temprature < 20:
            return `It's cool outside. You should wear jacket or a gloves and a hat.`;
        case temprature < 30:
            return `It's hot outside. You should wear light and breathable clothing 
       like shorts, a tank top, or a sundress.`;
    }
}
console.log(suggestClothes(17));
