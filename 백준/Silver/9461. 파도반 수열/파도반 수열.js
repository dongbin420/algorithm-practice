const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(line => Number(line.replace(/\r/g, '')));

const T = input.shift();
let max = 0;

input.forEach((N) => {
  if (max < N) {
    max = N;
  }
})

const P = [0];
P[1] = 1;
P[2] = 1;
P[3] = 1;
P[4] = 2;
P[5] = 2;

for (let i = 6; i <= max; i++) {
  P[i] = P[i - 1] + P[i - 5];
}

input.forEach(N => console.log(P[N]));