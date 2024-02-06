const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(line => line.replace(/\r/g, '').split(' ').map(num => Number(num)));

const N = input.shift();
const answer = [];

input.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  }

  return a[1] - b[1];
});

for (let i = 0; i < N; i++) {
  const [first, second] = input[i];
  answer.push(first + ' ' + second);
}

console.log(answer.join('\n'));