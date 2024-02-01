const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs.readFileSync(filePath).toString().split('\n').map(line => line.replace(/\r/g, ''));

const N = Number(input[0]);
const baseArr = input[1].split(' ').map(num => Number(num)).sort((a, b) => a - b);
const M = Number(input[2]);
const checkNums = input[3].split(' ').map(num => Number(num));

const answer = [];

for (let i = 0; i < M; i++) {
  let low = 0;
  let high = baseArr.length - 1;
  let found = false;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    
    if (checkNums[i] < baseArr[mid]) {
      high = mid - 1;
    } else if (checkNums[i] > baseArr[mid]) {
      low = mid + 1;
    } else {
      answer.push('1');
      found = true;

      break;
    } 
  }

  if (!found) {
    answer.push('0');
  }
}

console.log(answer.join('\n'));