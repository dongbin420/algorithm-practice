const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().split('\n').map(line => line.replace(/\r/g, ''));

const stringNum = input.length;
let answer = '';

for (let i = 0; i < stringNum; i++) {
  const string = input[i];
  const stack = [];
  let isValid = true;

  for (let j = 0; j < string.length; j++) {
    if (string[j] === '(') {
      stack.push(string[j]);
    }

    if (string[j] === ')') {
      if (stack[stack.length - 1] === '(') {
        stack.pop();
      } else {
        isValid = false;
        break;
      }
    }

    if (string[j] === '[') {
      stack.push(string[j]);
    }

    if (string[j] === ']') {
      if (stack[stack.length - 1] === '[') {
        stack.pop();
      } else {
        isValid = false;
        break;
      }
    }
  }

  if (string.length > 1) {
    if (isValid === false || stack.length !== 0) {
      answer += 'no\n';
    } else {
      answer += 'yes\n';
    }
  }
}

console.log(answer.trim());

