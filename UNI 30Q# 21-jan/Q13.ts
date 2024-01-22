//Q13

function envenNumberArray(numbers: number[]) {
  return numbers.filter((number) => number % 2 == 0);
}
let originalArray: number[] = [2, 5, 6, 7, 8, 10, 60, 56];
let evenArray: number[] = envenNumberArray(originalArray);
console.log(`Original Numbers Array: ${originalArray}`);
console.log(`Even Numbers Array: ${evenArray}`);
