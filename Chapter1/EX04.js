let currentTemp = 28;
let maxSafeTemp = 25;
if (currentTemp > maxSafeTemp) {
    console.log("🌡️ อุณหภูมิปัจจุบัน: " + currentTemp + "°C");
    console.log("🚨 อันตราย: อุณหภูมิห้อง Server สูงเกินไป!");
} else {
    console.log("🌡️ อุณหภูมิปัจจุบัน: " + currentTemp + "°C");
    console.log("✅ ปกติ: อุณหภูมิอยู่ในเกณฑ์ปลอดภัย");
}