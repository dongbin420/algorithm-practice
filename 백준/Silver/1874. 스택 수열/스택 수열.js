const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs.readFileSync(filePath).toString().split('\n').map(line => line.replace(/\r/g, ''));

const N = Number(input.shift());
const stack = [];
let answer = [];
let i = 1;


while (true) {
  if (stack.length > 0 && Number(input[0]) === stack[stack.length - 1]) {
    stack.pop();
    input.shift();
    answer.push('-');
  } else if (i <= N) {
    stack.push(i);
    answer.push('+');
    i++;
  } else if (stack.length > 0 && Number(input[0]) !== stack[stack.length - 1]) {
    console.log('NO');

    break;
  } else {
    console.log(answer.join('\n'));

    break;
  }
}