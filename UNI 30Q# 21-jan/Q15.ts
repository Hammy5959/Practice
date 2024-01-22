//Q15
function positiveNumbersCheck(number: number[]): boolean {
  return number.every((num) => num > 0);
}
let numArray: number[] = [89, -89];
console.log(positiveNumbersCheck(numArray));
