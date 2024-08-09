const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((line) => line.replace(/\r/g, ''));

const T = Number(input.shift());
let answer = '';

for (let i = 0; i < input.length; i = i + 2) {
  let cnt = 1;
  const [N, target] = input[i].split(' ').map(Number);
  const imporArr = input[i + 1].split(' ').map(Number);
  const stack = imporArr.map((impor, idx) => [impor, idx]);

  while (true) {
    if (stack[0][0] === Math.max(...stack.map((arr) => arr[0]))) {
      if (stack[0][1] === target) {
        answer += `${cnt}\n`;
        cnt = 1;

        break;
      } else {
        stack.shift();
        cnt++;
      }
    } else {
      stack.push(stack.shift());
    }
  }
}

console.log(answer.trim());