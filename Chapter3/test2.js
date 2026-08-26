const prompt = require('prompt-sync')();
let height = parseInt(prompt("กรุณาป้อนความสูง (Height): "));
let width = parseInt(prompt("กรุณาป้อนความกว้าง (Width): "));
console.log("\n--- ผลลัพธ์กำแพงอิฐ ---");
for (let i = 1; i <= height; i++) {
    let row = "";
    for (let j = 1; j <= width; j++) {
        row += "[#]";
    }
    console.log(row);
}
console.log("------------------------");