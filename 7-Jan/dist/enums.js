//Enums
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
//Starts with 0
let c = Color.Red;
console.log(c);
var Color1;
(function (Color1) {
    Color1[Color1["red"] = 1] = "red";
    Color1[Color1["green"] = 2] = "green";
    Color1[Color1["blue"] = 3] = "blue";
})(Color1 || (Color1 = {}));
let colorName = Color1[2];
console.log(colorName);
var Color2;
(function (Color2) {
    Color2[Color2["red"] = 1] = "red";
    Color2[Color2["green"] = 2] = "green";
    Color2[Color2["blue"] = 4] = "blue";
})(Color2 || (Color2 = {}));
let colorName2 = Color2["red"];
console.log(colorName2);
export {};
