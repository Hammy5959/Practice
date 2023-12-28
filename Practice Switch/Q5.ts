//User Provided Age
function providedAge(age: number) {
  switch (true) {
    case age >= 0 && age <= 15:
      return "Person is Child";
    case age >= 15 && age <= 19:
      return "Person is Teenager";
    default:
      return "Person is Adult";
  }
}
console.log(providedAge(14));
