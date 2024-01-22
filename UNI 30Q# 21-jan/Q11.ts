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
  