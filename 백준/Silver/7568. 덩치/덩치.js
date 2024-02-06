const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(line => line.replace(/\r/g, '').split(' ').map((ele) => Number(ele)));

const N = input.shift();
const rank = [];

for (let i = 0; i < N; i++) {
  let currentRank = 1;
  
  for (let j = 0; j < N; j++) {
    if (i !== j) {
      if (input[i][0] < input[j][0] && input[i][1] < input[j][1]) {
        currentRank++;
      }
    }
  }

  rank.push(currentRank);
}

console.log(rank.join(' '));