"use strict";
//Check Year Leap or not
function checkYearLeapOrNot(year) {
    switch (true) {
        case year % 4 === 0:
            return `${year} is leap year`;
        default:
            return `${year} is not leap year`;
    }
}
console.log(checkYearLeapOrNot(2020));
