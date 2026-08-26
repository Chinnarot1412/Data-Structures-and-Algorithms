const prompt = require('prompt-sync')();
let start = parseInt(prompt("กรุณาป้อนวินาทีถอยหลัง:", "5"));

console.log("--- เริ่มนับถอยหลัง ---");
for (let i = start; i >= 1; i--) {
    console.log("T-minus " + i + "...");
}
console.log("🚀 Launch! จรวดทะยานสู่อวกาศ!");