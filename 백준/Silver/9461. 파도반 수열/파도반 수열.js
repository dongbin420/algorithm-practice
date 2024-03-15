const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

const T = input.shift();
const maxInput = Math.max(...input);
const result = [];

const P = [0];
P[1] = 1;
P[2] = 1;
P[3] = 1;
P[4] = 2;
P[5] = 2;

for (let i = 6; i <= maxInput; i++) {
  P[i] = P[i - 1] + P[i - 5];
}

input.forEach(N => result.push(P[N]));

console.log(result.join('\n'));