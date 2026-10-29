const fs = require("fs");

console.log("--- 3. Buffer ---");

const raqamlar = [];
for (let i = 0; i < 10; i++) {
  raqamlar.push(Math.floor(Math.random() * 100));
}

const buffer = Buffer.from(raqamlar.join(", "));
fs.writeFileSync("raqamlar.txt", buffer);

const oqilgan = fs.readFileSync("raqamlar.txt");
console.log(oqilgan);
console.log(oqilgan.toString());
