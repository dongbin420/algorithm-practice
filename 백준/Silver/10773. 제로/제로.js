const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().split('\n').map(ele => ele.trim());;

const numOper = input.shift();
const stack = [];

for (let i = 0; i < numOper; i++) {
  const targetNum = Number(input[i]);
  
  if (targetNum !== 0) {
      stack.push(targetNum);
    } else {
      stack.pop();
    }
}

const sum = stack.reduce((acc, cur) => acc + cur, 0)

console.log(sum);