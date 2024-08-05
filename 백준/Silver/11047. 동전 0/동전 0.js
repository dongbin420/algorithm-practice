const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let [N, K] = input.shift().split(' ').map(Number);
const editedInput = input.map(Number).sort((a, b) => b - a);
let cnt = 0;

for (let i = 0; i < N; i++) {
  while (editedInput[i] <= K) {
    K = K - editedInput[i];
    cnt++;
  }

  if (K === 0) break;
}

console.log(cnt);