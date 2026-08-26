const prompt = require('prompt-sync')();
let balance = parseFloat(prompt("กรุณาป้อนเงินฝากเริ่มต้น (บาท): "));
let target = parseFloat(prompt("กรุณาป้อนเป้าหมายเงินออม (บาท): "));
let years = 0;
const initialBalance = balance;

console.log("\n--- เริ่มคำนวณดอกเบี้ยทบต้น (5% ต่อปี) ---");
while (balance < target) {
    balance += balance * 0.05; 
    years++;
    console.log("ปีที่ " + years + ": ยอดเงินสะสม = " + balance.toFixed(2) + " บาท");
}
console.log("\n==========================================");
console.log("🎉 ถึงเป้าหมายเงินออมเรียบร้อยแล้ว!");
console.log("💵 เงินฝากเริ่มต้น: " + initialBalance.toLocaleString() + " บาท");
console.log("🎯 เป้าหมาย: " + target.toLocaleString() + " บาท");
console.log("⏳ ต้องใช้เวลาทั้งหมด: " + years + " ปี");
console.log("💰 ยอดเงินรวมสุทธิ: " + balance.toFixed(2) + " บาท");
console.log("==========================================");