const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs.readFileSync(filePath).toString().trim();

const inputNum = Number(input);
const dp = Array(inputNum + 1);

const getTheWays = (length) => {
  if (length <= 2) return length % 10007;

  if (!dp[length]) {
    dp[length] = (getTheWays(length - 2) + getTheWays(length - 1)) % 10007;
  }

  return dp[length];
}

console.log(getTheWays(inputNum));