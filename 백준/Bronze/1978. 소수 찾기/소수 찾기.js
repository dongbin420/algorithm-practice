const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs.readFileSync(filePath).toString().split('\n').map(line => line.replace(/\r/g, ''));

const N = input.shift();
const editedInput = input[0].split(' ').map(num => Number(num));
let answer = 0;

for (let i = 0; i < N; i++) {
  let isTargetNum = true;

  if (editedInput[i] === 1) {
    isTargetNum = false;
  } else {
    for (let j = 2; j < editedInput[i]; j++) {
      if (editedInput[i] % j === 0) {
        isTargetNum = false;
      }
    }
  }

  if (isTargetNum) {
    answer += 1;
  } 
}

console.log(answer);