function calculateDiscount(price: number) {
  var discountPercentage = 5;
  if (price > 100) {
    discountPercentage = 10;
  }
  var discount = (discountPercentage * price ) / 100;
  return price - discount;
}

console.log(calculateDiscount(80))

function calculateDiscount_a(price: number) {
  if (price > 100) {
    var discountPercentage = 10;
  } else {
    var discountPercentage = 5;
  }
  var discount = (price * discountPercentage) / 100;
  return price - discount;
}

function calculateDiscount_b(price: number) {
  if (price > 100) {
    return price - (price * 10) / 100;
  } else {
    return price - (price * 5) / 100;
  }
}

function discountPrice(price:number){
  if(price > 100){
    return price - (price * 10) / 100
  }else{
    return price - (price * 5) / 100
  }
}
var price = 250
console.log(discountPrice(price))