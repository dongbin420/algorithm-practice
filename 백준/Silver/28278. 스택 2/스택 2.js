const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const orderTime = Number(input.shift());
const stack = [];
let answer = '';

for (let i = 0; i < orderTime; i++) {
  const [command, value] = input[i].trim().split(' ');
  
  if (command === '1') {
    stack.push(value);
  }

  if (command === '2') {
    if (stack.length !== 0) {
      answer = answer + `${stack.pop()}\n`;
    } else {
      answer = answer + '-1\n';
    }
  } 

  if (command === '3') {
    answer = answer + `${stack.length}\n`;
  }

  if (command === '4') {
    if (stack.length === 0) {
      answer = answer + '1\n'
    } else {
      answer = answer + '0\n'
    }
  }

  if (command === '5') {
    if (stack.length !== 0) {
      answer = answer + `${stack[stack.length-1]}\n`
    } else {
      answer = answer + '-1\n'
    }
  }
}

console.log(answer.trim());