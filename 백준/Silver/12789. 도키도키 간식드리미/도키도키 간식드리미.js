const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().split('\n').map(line => line.replace(/\r/g, ''));

const studentNum = Number(input[0]);
const order = input[1].split(' ').map(Number);
const stack = [];
let expectedStudent = 1;

for (let i = 0; i < studentNum; i++) {
  const currentStudent = order[i];

  if (currentStudent === expectedStudent) {
    expectedStudent++;
  } else {
    stack.push(currentStudent);
  }

  while (stack.length > 0 && stack[stack.length - 1] === expectedStudent) {
    stack.pop();
    expectedStudent++;
  }
}

if (stack.length === 0) {
  console.log('Nice');
} else {
  console.log('Sad');
}