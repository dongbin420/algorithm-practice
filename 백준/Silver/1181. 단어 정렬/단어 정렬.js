const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n").map((line) => line.replace(/\r/g, ""));

const num = Number(input.shift());
const words = new Set();

for (let i = 0; i < num; i++) {
  words.add(input[i]);
}

const uniqueInput = Array.from(words);

uniqueInput.sort().sort((a, b) => {
  return a.length - b.length;
})

console.log(uniqueInput.join('\n'));