const fs = require("fs");

console.log("--- 2. fs moduli ---");

const matn = fs.readFileSync("matn.txt", "utf8");
console.log(matn);

fs.writeFileSync("salom.txt", "Salom, dunyo!");
console.log("salom.txt yaratildi");
