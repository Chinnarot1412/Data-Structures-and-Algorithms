const readline = require('readline-sync');

function calculateBMI(weightKg, heightCm) {
    // แปลงความสูงจากเซนติเมตรเป็นเมตร
    const heightM = heightCm / 100;
    // คำนวณ BMI
    const bmi = weightKg / (heightM * heightM);
    return bmi;
}

// ฟังก์ชันประเมินผลค่า BMI
function evaluateBMI(bmi) {
    if (bmi < 18.5) {
        return "ผอม / น้ำหนักน้อยกว่าเกณฑ์";
    } else if (bmi >= 18.5 && bmi <= 22.9) {
        return "น้ำหนักปกติ เหมาะสม";
    } else if (bmi >= 23.0 && bmi <= 24.9) {
        return "ท้วม / สภาวะน้ำหนักเกิน";
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        return "อ้วน / โรคอ้วนระดับ 1";
    } else {
        return "อ้วนมาก / โรคอ้วนระดับ 2";
    }
}

// รับข้อมูลจากผู้ใช้
const weightInput = readline.question("กรอกน้ำหนัก (กิโลกรัม): ");
const heightInput = readline.question("กรอกส่วนสูง (เซนติเมตร): ");

// แปลงค่าที่รับมาเป็นตัวเลข
const weight = parseFloat(weightInput);
const height = parseFloat(heightInput);

// เรียกใช้ฟังก์ชันและแสดงผล
const bmi = calculateBMI(weight, height);
const evaluation = evaluateBMI(bmi);
console.log("ค่า BMI ของคุณคือ:", bmi.toFixed(2));
console.log("ผลการประเมิน:", evaluation);
