const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .split('\n')
  .map((line) => line.replace(/\r/g, ''));

const T = Number(input.shift());
const answer = [];

for (let i = 0; i < T; i++) {
  let cnt = 0;

  for (let j = 0; j < input[i].length; j++) {
    cnt += input[i][j] === '(' ? 1 : -1;

    if (cnt < 0) break;
  }

  cnt === 0 ? answer.push('YES') : answer.push('NO');
}

console.log(answer.join('\n'));