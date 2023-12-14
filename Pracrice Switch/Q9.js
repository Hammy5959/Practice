"use strict";
//day OF the week
function dayOfTheWeek(day) {
    switch (day) {
        case 1:
            return `Monday`;
        case 2:
            return `Tuesday`;
        case 3:
            return `Wednesday`;
        case 4:
            return `Thursday`;
        case 5:
            return `Friday`;
        case 6:
            return `Saturday`;
        case 7:
            return `Sunday`;
        default:
            return `Please Enter between 1-7 number`;
    }
}
console.log(dayOfTheWeek(6));
