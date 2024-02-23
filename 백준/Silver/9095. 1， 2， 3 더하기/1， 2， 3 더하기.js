const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(line => Number(line.replace(/\r/g, '')));

input.shift();
const answer = [];

input.forEach((input) => {
  const dp = [];

  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 4;

  for(let i = 4; i <= input; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }

  answer.push(dp[input]);
})

console.log(answer.join('\n'));