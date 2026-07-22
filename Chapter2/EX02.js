const prompt = require('prompt-sync')();

let finalPrice = 50; 

let hour = parseInt(prompt(" เวลาชั่วโมงปัจจุบัน): "));

let isRaining = parseFloat(prompt(" สถานะฝนตก (1 = ตก, 0 = ไม่ตก): "));
if (hour === 18) {
  finalPrice += 30;
  if (isRaining === 1) {
    finalPrice *= 1.5;
  }
} else {
  if (isRaining === 1) {
    finalPrice += 20;
  }
}

console.log("ราคาสุทธิ =", finalPrice, "บาท")