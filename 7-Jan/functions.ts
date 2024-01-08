//Functions
//Named Function
//Function Parameter is optional. after parameter function body start
//outside variable calls, use with in functions
//return type optional
function sum(x: number, y: number): number {
  return x + y;
}

//Anonymous Function
//in anonymous functions, function names empty
//Anonymous function with explicit type
let add1 = function (x: number, y: number): number {
  return x + y;
};
console.log(add1(12, 56));
//Arrow functions
//ES6 Feature =>
//Start with let / const functionName = ()=>{}
let add2: (x: number, y: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};
//Lambda Functions
//Arrow functions
//Lamda Functions does not return
let add3 = (a: number, b: number) => a + b;
console.log(add3(12,56))

function powerFunction(a: number, b: number, c: number): number {
  let sum = a ** b;
  let sum2 = sum ** c;
  return sum2;
}
let add = powerFunction(12, 2, 4);
console.log(add);

let addParameters: (a: number, b: number, c: number) => number = function (
  a: number,
  b: number,
  c: number
): number {
  let sum = a ** b;
  let sum2 = sum ** c;
  return sum2;
};
console.log(addParameters(12, 3, 5));
