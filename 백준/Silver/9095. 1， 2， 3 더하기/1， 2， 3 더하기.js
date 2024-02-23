const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(line => Number(line.replace(/\r/g, '')));

const T = Number(input.shift());
const dp = Array(12).fill(0); // 범위에 있는 모든 정수에 대하여 합을 만드는 방법의 수에 대한 배열
const answer = [];

dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

for (let i = 4; i <= 11; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2] + dp[i - 3]);
}

input.forEach((input) => answer.push(dp[input]))

console.log(answer.join('\n'));