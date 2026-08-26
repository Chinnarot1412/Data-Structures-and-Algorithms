const prompt = require('prompt-sync')();
let limit = parseInt(prompt("กรุณาป้อนตัวเลขขอบเขตสูงสุด (N): "));
let evenNumbers = []; 
console.log("--- เริ่มทำการค้นหาเลขคู่ ---");
for (let i = 1; i <= limit; i++) {
    if (i % 2 === 0) {
        evenNumbers.push(i);
    }
}
console.log(`เลขคู่ตั้งแต่ 1 ถึง ${limit} ได้แก่: ${evenNumbers.join(", ")}`);