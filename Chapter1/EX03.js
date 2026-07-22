let totalAmount = 1200; 
if (totalAmount >= 1000) {
    let discount = 1200 * 0.1;
    let  total = totalAmount - discount;
    console.log("🎉 ผลลัพธ์: ส่วนลด 10% และแสดงยอดสุทธิที่ลดแล้ว");
    console.log("ยอดซื้อของคุณคือ: " + total + " บาท");
}else {
    console.log("❌ ผลลัพธ์: แสดงยอดเงินเต็มจำนวนเดิมเนื่องจากไม่เข้าเงื่อนไข");
    console.log("ยอดซื้อของคุณคือ: " + totalAmount + " บาท");
}