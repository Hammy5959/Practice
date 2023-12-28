`Write a function that takes a string and returns the number of vowels in the string.`;

function stringVowels(str: string[]): number {
  let count: number = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      console.log(count++);
    }
  }
  return count;
}
let vowels: string[] = ["a", "e", "i", "o", "u"];
console.log(stringVowels(vowels))
