const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(line => line.replace(/\r/g, ''));

const L = Number(input.shift());
const inputAlphabet = input[0];
let hashValue = BigInt(0);
const M = BigInt(1234567891);
const r = BigInt(31);

for (let i = 0; i < L; i++) {
  let position = BigInt(inputAlphabet.charCodeAt(i) - 96);
  hashValue += position * (r**BigInt(i));
}

console.log(String(hashValue % M));