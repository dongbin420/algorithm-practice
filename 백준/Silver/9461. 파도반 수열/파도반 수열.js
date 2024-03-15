const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

const T = input.shift();
const maxInput = Math.max(...input);

const P = [0, 1, 1, 1, 2, 2];

for (let i = 6; i <= maxInput; i++) {
  P[i] = P[i - 1] + P[i - 5];
}

input.forEach(N => console.log(P[N]));