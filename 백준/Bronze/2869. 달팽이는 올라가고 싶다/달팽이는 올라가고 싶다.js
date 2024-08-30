const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map((line) => Number(line.replace(/\r/g, '')));

const [A, B, V] = input;
const day = Math.ceil((V - A) / (A - B)) + 1;

console.log(day);