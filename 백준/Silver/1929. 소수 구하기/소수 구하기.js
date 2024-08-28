const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .split(' ')
  .map((line) => Number(line.replace(/\r/g, '')));

const [M, N] = input;
const primeNums = Array(N + 1).fill(true);
primeNums[0] = primeNums[1] = false;
let answer = '';

// for (let i = 2; i <= Math.sqrt(N); i++) {
//   for (let j = i * i; j <= N; j += i) {
//     if (primeNums[j]) {
//       primeNums[j] = false;
//     }
//   }
// }

for (let i = 2; i <= Math.sqrt(N); i++) {
  if (primeNums[i]) {
    for (let j = i * i; j <= N; j += i) {
      primeNums[j] = false;
    }
  }
}

for (let k = M; k <= N; k++) {
  if (primeNums[k]) {
    answer += `${k}\n`;
  }
}

// for (const idx in primeNums) {
//   if (idx >= M && primeNums[idx]) {
//     answer += `${idx}\n`;
//   }
// }

console.log(answer.trim());