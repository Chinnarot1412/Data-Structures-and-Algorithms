const prompt = require('prompt-sync')();

let totalPrice = 40;

let hasTopping = parseInt(prompt("มี topping หรือไม่ (1 เพิ่ม, 0 ไม่เพิ่ม): "));
if (hasTopping === 1) {
  totalPrice += 10;
}

let isBlended = parseFloat(prompt("สถานะสูตรปั่น (1 = ปั่น, 0 = ไม่ปั่น): "));
if (isBlended === 1) {
  totalPrice += 5;
}

console.log("ราคาสุทธิ =", totalPrice, "บาท")