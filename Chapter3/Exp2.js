const prompt = require('prompt-sync')();

let total = 0;
let price = 0;

console.log("--- ระบบคิดเงินสินค้า (ป้อน 0 เพื่อจบการทำงาน) ---");

do {
    // รับค่าราคาสินค้าทีละชิ้นผ่าน Terminal
    price = parseFloat(prompt("ป้อนราคาสินค้า (บาท): ")) || 0;

    if (price > 0) {
        total += price;
        console.log(" -> บันทึกราคา " + price + " บาท | ยอดรวมสะสม: " + total + " บาท");
    }
} while (price !== 0); // วนลูปทำซ้ำตราบใดที่ราคายังไม่เป็น 0

let vat = total * 0.07;
let netTotal = total + vat;

console.log("======================================");
console.log("💰 ยอดรวมสินค้า : " + total.toFixed(2) + " บาท");
console.log("➕ ภาษี VAT 7%   : " + vat.toFixed(2) + " บาท");
console.log("🧾 ยอดชำระสุทธิ  : " + netTotal.toFixed(2) + " บาท");
console.log("======================================");