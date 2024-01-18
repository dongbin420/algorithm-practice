const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const testCase = Number(input.shift());
let answer = '';

for (let i = 0; i < testCase; i++) {
  const stack = [];
  const parentheses = input[i].trim();
  let isValid = true;

  for (let j = 0; j < parentheses.length; j++) {
    if (parentheses[j] === '(') {
      stack.push(parentheses[j]);
    }

    if (parentheses[j] === ')') {
      if (stack.length > 0) {
        stack.pop();
      } else {
        isValid = false;
        break;
      }
    }
  }

  if (stack.length === 0 && isValid) {
    answer = answer + 'YES\n';
  } else {
    answer = answer + 'NO\n';
  }
}

console.log(answer.trim());