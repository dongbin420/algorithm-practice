const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(line => line.replace(/\r/g, ''));

const [N, M] = input.shift().split(' ').map(Number);
const nums = input.shift().split(' ').map(Number);
input = input.map(section => section.split(' ').map(Number));

const answer = [];
const prefixSum = [0];

for (let i = 0; i < N; i++) {
  prefixSum.push(prefixSum[i] + nums[i]);
}

for (let j = 0; j < M; j++) {
  const [from, to] = input[j];
  const sum = prefixSum[to] - prefixSum[from - 1];
  answer.push(sum);
}

console.log(answer.join('\n'));