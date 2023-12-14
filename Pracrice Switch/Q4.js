"use strict";
function calculateDiscount(price) {
    var discountPercentage = 5;
    if (price > 100) {
        discountPercentage = 10;
    }
    var discount = (discountPercentage * price) / 100;
    return price - discount;
}
console.log(calculateDiscount(80));
function calculateDiscount_a(price) {
    if (price > 100) {
        var discountPercentage = 10;
    }
    else {
        var discountPercentage = 5;
    }
    var discount = (price * discountPercentage) / 100;
    return price - discount;
}
function calculateDiscount_b(price) {
    if (price > 100) {
        return price - (price * 10) / 100;
    }
    else {
        return price - (price * 5) / 100;
    }
}
function discountPrice(price) {
    if (price > 100) {
        return price - (price * 10) / 100;
    }
    else {
        return price - (price * 5) / 100;
    }
}
var price = 250;
console.log(discountPrice(price));
