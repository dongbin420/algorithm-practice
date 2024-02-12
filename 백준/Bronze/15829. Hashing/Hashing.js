const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(line => line.replace(/\r/g, ''));

const L = Number(input.shift());
const inputAlphabet = input[0];
let hashValue = 0;

for (let i = 0; i < L; i++) {
  let position = inputAlphabet.charCodeAt(i) - 96;
  hashValue += position * 31**i;
}

console.log(hashValue);