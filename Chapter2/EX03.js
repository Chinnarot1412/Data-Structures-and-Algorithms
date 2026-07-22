const prompt = require('prompt-sync')();

let totalAmount = parseFloat(prompt("กรุณากรอกจำนวนเงิน: "));
let discount = 0;

if (totalAmount < 300) {
  discount = 0.0;
} else if (totalAmount < 500) {
  discount = 20;
} else if (totalAmount < 1000) {
  discount = 50;
} else {
  discount = 120;
}

console.log("ส่วนลดที่ได้รับ (discount) =", discount, "บาท");