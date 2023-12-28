//Check if te given if divisible
function checkNumberDivisible(givenNumber: number) {
  switch (false) {
    case givenNumber % 3 === 0:
      return `the number is divisible by 3`;
    case givenNumber % 5 === 0:
      return `the number is divisible by 5`;
    case givenNumber % 3 === 0 && givenNumber % 5 === 0:
      return `the number is divisible by both 3 or 5`;
    default:
      return `theis not  is divisible by both 3 or 5`;
  }
}
console.log(checkNumberDivisible(50));
