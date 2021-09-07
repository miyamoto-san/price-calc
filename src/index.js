import calculatePrice from "./price-calculator";

let userType = 1;
let productType = 0;
let price = 100;
let publishedDate = new Date();
try {
  console.log(
    calculatePrice(userType, productType, price, publishedDate)
  );
} catch (e) {
  console.log(e);
}