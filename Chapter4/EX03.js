const readline = require('readline-sync');

function calculateElectricBill(units) {     
    if (units <= 100) {
        return units * 3.5; // ช่วงที่ 1
    } else {
        return (100 * 3.5) + ((units - 100) * 4.5); // ช่วงที่ 2
    }
}

// รับข้อมูลจากผู้ใช้
const inputUnits = readline.question("กรอกจำนวนหน่วยไฟฟ้าที่ใช้ (kWh): ");

// แปลงค่าที่รับเข้ามาจาก String เป็น Number
const units = parseFloat(inputUnits);




// เรียกใช้ฟังก์ชันและแสดงผล
const totalBill = calculateElectricBill(units);
console.log(`ค่าไฟฟ้ารวมทั้งหมดสำหรับการใช้ ${units} หน่วยคือ: ${totalBill.toFixed(2)} บาท`);











