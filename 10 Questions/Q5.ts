`Write a function that takes an array of numbers and returns the largest number in the array.`

function numArray(num:number[]){
    for(let i = 0;i < num.length;i++)
    console.log(num[i])
}
let numbers:number[]=[2,4,6,8,12,34,56,78,90,23,2,23]
numArray(numbers)