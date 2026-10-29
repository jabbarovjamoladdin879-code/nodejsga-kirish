const { qoshish, ayirish, chiqarish } = require("./calculator");

console.log("--- 1. Local modul ---");
chiqarish("10 + 5", qoshish(10, 5));
chiqarish("10 - 5", ayirish(10, 5));
