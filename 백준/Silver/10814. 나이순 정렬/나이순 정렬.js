const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(line => line.replace(/\r/g, '').split(' ').map((ele, idx) => idx === 0 ? Number(ele) : ele));

const N = input.shift();

input.sort((a, b) => {
  if (a[0] === b[0]) {
    return 0;
  }

  return a[0] - b[0];
})

const answer = [];

for (let i = 0; i < N; i++) {
  answer.push(input[i][0] + ' ' + input[i][1]);
}

console.log(answer.join('\n'));