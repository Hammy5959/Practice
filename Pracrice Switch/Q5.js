"use strict";
//User Provided Age
function providedAge(age) {
    switch (true) {
        case age >= 0 && age <= 12:
            return "Person is Child";
        case age >= 13 && age <= 19:
            return "Person is Teenager";
        default:
            return "Person is Adult";
    }
}
console.log(providedAge(22));
