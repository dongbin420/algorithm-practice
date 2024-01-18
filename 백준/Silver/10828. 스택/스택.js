const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const orderTime = Number(input[0]);
const orders = [];
const pushPattern = /^push (\d+)$/;
const stack = [];

let answer = '';

for (let i = 1; i <= orderTime; i++) {
  orders.push(input[i].trim())
}

for (let j = 0; j < orders.length; j++) {
  const match = orders[j].match(pushPattern);
  
  if (match) {
    stack.push(Number(match[1]));
  } else if (orders[j] === 'top') {
    if (stack.length === 0) {
      answer = answer + '-1\n'
    } else {
      answer = answer + `${stack[stack.length-1]}\n`
    }
  } else if (orders[j] === 'size') {
    answer = answer + `${stack.length}\n`
  } else if (orders[j] === 'empty') {
    if (stack.length === 0) {
      answer = answer + '1\n'
    } else {
      answer = answer + '0\n'
    }
  } else if (orders[j] === 'pop') {
    if (stack.length === 0) {
      answer = answer + '-1\n'
    } else {
      answer = answer + `${stack.pop()}\n`
    }
  }
}

console.log(answer.trim());