`Write a TypeScript function that takes a string as input and returns the string reversed.`

function reverseString(String:string):string{
    return String.split("").reverse().join("")
}
let string:string="Hello Hamid"
console.log(reverseString(string))