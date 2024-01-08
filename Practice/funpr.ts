//Four types of Functions
//1:Named Functions
//2:Anonymous Functions
//3:Arrow Functions
//4:Lamda Functions

//Named Functions
function sum(a: number, b: number): number {
  return a + b;
}
let sumNumbers: number = sum(123, 67);
console.log(sumNumbers);

//Anonymous Functions
//In Anonymous Functions does not any names
var substract = function (a: number, b: number): number {
  return a - b;
};
let subtractNumbers: number = substract(100, 41);
console.log(subtractNumbers);

//Arrow Functions
var multiply: (a: number, b: number) => number = function (
  num1: number,
  num2: number
): number {
  return num1 * num2;
};
let multiplyNumbers: number = multiply(13, 6);
console.log(multiplyNumbers);

//Lambda Functions
//Arrow functions
//Lamda Functions does not return
let add3 = (a: number, b: number) => a + b;
console.log(add3(12, 56));

//Arrow Functions uses
var powerNumbers: (a: number, b: number, c: number) => number = function (
  num1: number,
  num2: number,
  num3: number
): number {
  let powerTwoNumbers: number = num1 ** num2;
  return powerTwoNumbers ** num3;
};
let powerNumbers1: number = powerNumbers(12, 23, 6);
console.log(powerNumbers1);

//lamda Functions uses
var division = (a: number, b: number, c: number) => a / b / c;
let divisionNumber:number=division(46,10,9)
console.log(divisionNumber)
