const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs.readFileSync(filePath).toString().split('\n').map(line => line.replace(/\r/g, ''));

const N = Number(input.shift());
const stack = [];
let answer = [];
let current = 1;

for (let i = 0; i < N; i++) {
  while (current <= Number(input[i])) {
    stack.push(current);
    answer.push('+');
    current++;
  }

  const deletedStack = stack.pop();
  answer.push('-');

  if (deletedStack !== Number(input[i])) {
    answer = ['NO'];

    break;
  }
}

console.log(answer.join('\n'));