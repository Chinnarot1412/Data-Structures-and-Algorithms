const prompt = require('prompt-sync')();

// สร้างฟังก์ชันคำนวณส่วนลด
function calculateDiscount(totalPrice, isMember) {
  if (isMember) {
    return totalPrice * 0.10; // ส่วนลด 10%
  } else {
    return 0; // ไม่เป็นสมาชิก → ไม่มีส่วนลด
  }
}

// รับข้อมูลจากผู้ใช้
let totalPrice = parseFloat(prompt("กรอกราคาสินค้ารวม (บาท): "));
let memberInput = prompt("เป็นสมาชิกหรือไม่ (y/n): ");

// แปลง y/n เป็น Boolean
let isMember = (memberInput.toLowerCase() === "y");

// เรียกใช้ฟังก์ชัน
let discount = calculateDiscount(totalPrice, isMember);
let netPrice = totalPrice - discount;

// แสดงผลลัพธ์
console.log("ยอดซื้อรวม =", totalPrice, "บาท");
console.log("ส่วนลดที่ได้รับจากการเป็นสมาชิก =", discount, "บาท");
console.log("ราคาสุทธิหลังหักส่วนลด =", netPrice, "บาท");
