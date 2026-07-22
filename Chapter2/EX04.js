const prompt = require('prompt-sync')();

let rewardCode = parseInt(prompt("กรุณากรอกรหัสรางวัล (1-3): "));
let itemName = "";

switch (rewardCode) {
  case 1:
    itemName = "กระเป๋าเป้";
    break;
  case 2:
    itemName = "กระบอกน้ำ";
    break;
  case 3:
    itemName = "พวงกุญแจ";
    break;
  default:
    itemName = "รหัสรางวัลไม่ถูกต้อง";
}

console.log("รางวัลที่ได้รับ:", itemName);