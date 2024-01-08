//Enums
enum Color {
  Red,
  Green,
  Blue,
}
//Starts with 0
let c: Color = Color.Red;
console.log(c);

enum Color1 {
  red = 1,
  green,
  blue,
}
let colorName: string = Color1[2];
console.log(colorName);

enum Color2 {
  red = 1,
  green = 2,
  blue = 4,
}
let colorName2=Color2["red"]
console.log(colorName2)