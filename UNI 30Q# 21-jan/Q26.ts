`Write a function that uses rest parameters to calculate the sum of an arbitrary number of
 arguments. This allows flexibility in the number of arguments.`;

var sumAllNumbers: (...numbers: number[]) => number = function (
  ...numbers: number[]
): number {
  return numbers.reduce((sum, num) => sum + num, 0);
};
let sumNumbers: number = sumAllNumbers(1, 2, 3, 4, 5, 78);
console.log(sumNumbers);
