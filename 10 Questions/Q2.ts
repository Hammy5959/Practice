`Write a function that takes an array of numbers and returns the sum of all the numbers in the
 array.`

 function sumArray(arr:number[]):number{
    let result = 0
    for(let i = 0;i < arr.length;i++){
        result +=arr[i]
    }
    return result
 }

 let sumArrayNumber:number[]=[23,5,12,23,45,67]
 console.log(sumArray(sumArrayNumber))