const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(line => Number(line.replace(/\r/g, '')));

const STAIR_NUM = input.shift();
const DP_WITH_PREV = Array(STAIR_NUM + 1).fill(0);
const DP_WITHOUT_PREV = Array(STAIR_NUM + 1).fill(0);

DP_WITH_PREV[1] = input[0];
DP_WITHOUT_PREV[1] = input[0];
DP_WITH_PREV[2] = input[0] + input[1];
DP_WITHOUT_PREV[2] = input[1]; 

for (let i = 3; i <= STAIR_NUM; i++) {
  DP_WITH_PREV[i] = DP_WITHOUT_PREV[i - 1] + input[i - 1];
  DP_WITHOUT_PREV[i] = Math.max(DP_WITH_PREV[i - 2], DP_WITHOUT_PREV[i - 2]) + input[i - 1]; 
}

console.log(Math.max(DP_WITH_PREV[STAIR_NUM], DP_WITHOUT_PREV[STAIR_NUM]));