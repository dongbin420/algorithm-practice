const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs.readFileSync(filePath).toString().split(' ').map(line => Number(line.replace(/\r/g, '')));

const M = input[0];
const N = input[1];

const isPrime = new Array(N + 1).fill(true);
isPrime[0] = isPrime[1] = false;

for (let i = 2; i <= Math.sqrt(N); i++) {
  if (isPrime[i]) {
    for (let j = i * i; j <= N; j += i) {
      isPrime[j] = false;
    }
  }
}

const answer = [];

for (let k = M; k <= N; k++) {
  if (isPrime[k]) {
    answer.push(k);
  }
}

console.log(answer.join('\n'));