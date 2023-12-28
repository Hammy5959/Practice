`Write a function that takes an array of numbers and returns the smallest number in the array.`

function findSamallestNumber(numbers:number[]):number{
    let smallNumber=numbers[0]
    for(let i = 1;i < numbers.length;i++)
    if(numbers[i] < smallNumber){
        smallNumber=numbers[i]
    }
    return smallNumber
}
let numbers:number[]=[12,23,34,56,45,32]
console.log(findSamallestNumber(numbers))