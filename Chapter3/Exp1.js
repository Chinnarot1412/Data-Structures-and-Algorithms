const prompt = require('prompt-sync')();
let battery = parseInt(prompt('กรณาป้อนเปอร์เซ็นต์แบต :')) || 0;
console.log("-----เริ่มชาร์จไฟ-----");
while(battery < 100){
    battery += 5;
    if(battery > 100) battery = 100;
    console.log(`⚡กำลังชาร์จ... ${battery} %`)
}
console.log(`✅🔋 Battery Full! ชาร์จเต็ม ${battery} %`)