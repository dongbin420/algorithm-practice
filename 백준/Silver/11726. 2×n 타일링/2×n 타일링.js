const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs.readFileSync(filePath).toString().trim();

const inputNum = Number(input);
const dp = Array(inputNum + 1);

dp[1] = 1 % 10007;
dp[2] = 2 % 10007;

for (let i = 3; i <= inputNum; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
}

console.log(dp[inputNum]);