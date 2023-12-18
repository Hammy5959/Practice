//Object
var items = [
  { model: "oppo", features: "Good Camera", price: 27000 },
  { model: "Samsung", features: "Amoled Display", price: 50000 },
  {
    model: "Iphone",
    features: "Camera and Expensive Price",
    price: 150000,
  },
];
for (let i = 0; i < items.length; i++) {
  console.log(
    `model ${items[i].model} features ${items[i].features} price ${items[i].price} `
  );
}
