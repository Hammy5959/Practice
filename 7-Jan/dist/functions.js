//Functions
//Named Function
//Function Parameter is optional. after parameter function body start
//outside variable calls, use with in functions
//return type optional
function sum(x, y) {
    return x + y;
}
//Anonymous Function
//in anonymous functions, function names empty
let add1 = function (x, y) {
    return x + y;
};
console.log(add1(12, 56));
//Arrow functions
//Anonymous function with explicit type
//ES6 Feature =>
//Start with let / const funcyionName = ()=>{}
let add2 = function (x, y) {
    return x + y;
};
//Lambda Functions
//Arrow functions
//Lamda Functions does not return
let add3 = (a, b) => a + b;
function powerFunction(a, b, c) {
    let sum = a + b;
    let sum2 = sum + c;
    return sum2;
}
let add = powerFunction(12, 2, 4);
console.log(add);
let addParameters = function (a, b, c) {
    let sum = a + b;
    let sum2 = sum + c;
    return sum2;
};
console.log(addParameters(12, 3, 5));
export {};
