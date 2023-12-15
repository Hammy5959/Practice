//Consumed tax on Bill
function calculateBill(units: number) {
  switch(true){
    case units > 100:
     return units - (units * 10) / 100
     case units > 200:
      return units - (units * 15) / 100
      case units > 500:
        return units - (units * 25) / 100

  }
}
console.log(calculateBill(2000))