"use strict";
var myName = "sheikh";
var hamid = "hamid";
var fullname = myName + hamid;
console.log(fullname);
let testwariable = "000";
console.log(typeof testwariable);
let name1 = "hamid";
let name2 = "Maqsood";
let fullnamee = name1.toLowerCase() + name2.toUpperCase();
console.log(fullnamee);
function H2(name = "Hammy") {
    let greetings = "Maqsood";
    return name.toUpperCase() + " " + greetings.toUpperCase() + " " + "59";
}
let H3 = H2("Hammy");
console.log(H3);
let Sum123 = (aaa = 6, bb = 6) => {
    return aaa + bb;
};
let H1 = Sum123();
console.log(H1);
var myNamee = "Sheikh";
var myName2 = "Hamid";
var Fullname = myNamee.toUpperCase() + "\n" + myName2.toUpperCase();
console.log(Fullname);
