const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(line => line.replace(/\r/g, ''));

const N = Number(input.shift());
input = input[0].split(' ').map(Number);
const answer = [];
const sortedInput = input.slice().sort((a, b) => a - b);
const numMap = new Map();
let cnt = 0;

for (let i = 0; i < N; i++) {
  if (i === 0 || sortedInput[i] !== sortedInput[i - 1]) {
    numMap.set(sortedInput[i], cnt++);
  }
}

for (let i = 0; i < N; i++) {
  answer.push(numMap.get(input[i]));
}

console.log(answer.join(' '));
