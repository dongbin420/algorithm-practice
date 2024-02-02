const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs.readFileSync(filePath).toString().split('\n').map(line => line.replace(/\r/g, ''));

const [N, M] = input.shift().split(' ').map(num => Number(num));
const editedInput = input[0].split(' ').map(num => Number(num));
const maxSumArr = [];

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    for (let k = j + 1; k < N; k++) {
      let maxSum = editedInput[i] + editedInput[j] + editedInput[k];
      
      if (maxSum <= M) {
        maxSumArr.push(maxSum);
      }
    }
  }
}

console.log(Math.max(...maxSumArr));