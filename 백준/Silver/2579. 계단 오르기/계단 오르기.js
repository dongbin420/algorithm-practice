const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(line => Number(line.replace(/\r/g, '')));

const STAIR_NUM = input[0];
const DP = Array(STAIR_NUM + 1).fill(0);

DP[1] = input[1];
DP[2] = input[1] + input[2];
DP[3] = Math.max(input[1] + input[3], input[2] + input[3]);

for (let i = 4; i <= STAIR_NUM; i++) {
  DP[i] = Math.max(input[i] + input[i - 1] + DP[i - 3], input[i] + DP[i - 2]); // 이전 계단을 밟았냐 안 밟았냐를 기준으로 최댓 값을 구함
}

console.log(DP[STAIR_NUM]);