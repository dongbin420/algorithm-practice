const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const N = Number(input.shift());
const editedInput = input[0]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
const sumArr = [];
let sum = 0;

for (let i = 0; i < N; i++) {
  sum += editedInput[i];
  sumArr.push(sum);
}

console.log(sumArr.reduce((acc, cur) => acc + cur, 0));
