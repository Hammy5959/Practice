//Q1
var named: string = "Hamid Maqsood";
console.log(named);

//Q2
function sum(num1: number, num2: number): number {
  return num1 + num2;
}
let sumNumbers: number = sum(58, 1);
console.log(sumNumbers);

//Q3
var givenNumber: number = 11;
if (givenNumber % 2 == 0) {
  console.log(`Given Number is Even`);
} else if (givenNumber % 2 !== 0) {
  console.log(`Given Number is Odd`);
}

//Q4
function stringConcatenates(name1: string, name2: string): string {
  return name1 + name2;
}
let fullName: string = stringConcatenates("Hamid", "Maqsood");
console.log(fullName);

//Q5
function areaCalculation(width: number, length: number) {
  let areaFind: number = width * length;
  console.log(areaFind);
}
areaCalculation(30, 20);

// Q6
function stringPalindromeCheck(str: string): boolean {
  let checkString: string = str.split("").reverse().join(" ");
  return str === checkString;
}
console.log(stringPalindromeCheck("Hamid"));

//objects
//Q7

interface bookType {
  title: string;
  author: string;
}
var bookInfo: bookType = {
  title: "Typescript",
  author: "Goldberg",
};
console.log(`Book Title:${bookInfo.title}\nBook Author:${bookInfo.author}`);

//Q8
interface bookDetailsType {
  name: string;
  author: string;
  topic: string;
}
var bookDetails: bookDetailsType = {
  name: "Typescript",
  author: "Goldgerg",
  topic: "Programming",
};
console.log(
  `Book Name:${bookDetails.name}\nBook Author:${bookDetails.author}\nBook Topic:${bookDetails.topic}`
);

//Q9
interface personType {
  name: string;
  age: number;
  address: string;
}
var personInfo: personType = {
  name: "Hamid Maqsood",
  age: 22,
  address: "Awan Town",
};
console.log(
  `Person Name:${personInfo.name}\nPerson Age:${personInfo.age}\nPerson Address:${personInfo.address}`
);

//Arrays
//Q10

var fruits: string[] = [
  "Orange",
  "Watermellon",
  "Apple",
  "PineApple",
  "Grapes",
];
for (let i = 0; i < fruits.length; i++) {
  console.log(`${fruits[i]}`);
}

//Q11
function averageValueofNumbers(num: number[]) {
  var sum: number = 0;
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }

  return sum / num.length;
}

let averageValue: number[] = [20, 78, 89, 5, 67, 78, 90, 67, 89, 10];
console.log(averageValueofNumbers(averageValue));

//Q12
var fruits1: string[] = ["Grapes", "Apple", "Peach"];
var fruits2: string[] = ["Watermellon", "Guava", "Mango"];
var arrayConcate: string[] = fruits1.concat(fruits2);
console.log(arrayConcate);

//Q13

function envenNumberArray(numbers: number[]) {
  return numbers.filter((number) => number % 2 == 0);
}
let originalArray: number[] = [2, 5, 6, 7, 8, 10, 60, 56];
let evenArray: number[] = envenNumberArray(originalArray);
console.log(`Original Numbers Array: ${originalArray}`);
console.log(`Even Numbers Array: ${evenArray}`);

//Q14
const words: string[] = ["Peach", "Apple", "Mango", "Watermellon"];
const wordsLength: number[] = words.map((words) => words.length);
console.log(wordsLength);

//Q15
function positiveNumbersCheck(number: number[]): boolean {
  return number.every((num) => num > 0);
}
let numArray: number[] = [89, -89];
console.log(positiveNumbersCheck(numArray));

//Q16
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

//Q17
let count: number = 10;
while (count >= 1) {
  console.log(count);
  count--;
}

//Q18
let numArrays: number[] = [1, 2, 4, 5, 59, 48];
let findIndex: number = numArrays.indexOf(59);
console.log(findIndex);

//Q19
function delayMeassage(message: () => void): void {
  setTimeout(message, 2000);
}
delayMeassage(() => {
  console.log("Hello Iam From Panaverse");
});

//Q20
function withCallback(value: number, callback: (result: number) => void): void {
  const result = value * 2;
  callback(result);
}

withCallback(5, (result) => {
  console.log(`Result: ${result}`);
});

//Q21
function delayMeassagePromises(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello I am data from Promise");
    }, 4000);
  });
}
delayMeassagePromises().then((message) => {
  console.log(message);
});

function delayMeassagePromises2(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello i am Hamid");
    }, 4000);
  });
}
delayMeassagePromises2().then((message) => {
  console.log(message);
});
//Q22

function sequentialPromises(): Promise<string> {
  return delayMeassagePromises()
    .then((message1) => {
      console.log(message1);
      return delayMeassagePromises();
    })
    .then((message2) => {
      console.log(message2);
      return "All promises resolved";
    });
}

// Example usage
sequentialPromises().then((finalMessage) => {
  console.log(finalMessage);
});

//Q23
let promise1 = delayMeassagePromises();
let promise2 = delayMeassagePromises2();
Promise.all([promise1, promise2]).then((message) => {
  console.log(message);
});

//Q24
var defaultParameter = (name: string = "Hamid Maqsood") => name;
console.log(defaultParameter());
export{}