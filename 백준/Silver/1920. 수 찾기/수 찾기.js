const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .split('\n')
  .map((line) => line.replace(/\r/g, ''));

const N = Number(input[0]);
const inputNums = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
const M = Number(input[2]);
const targetNums = input[3].split(' ').map(Number);

let answer = '';

for (let i = 0; i < M; i++) {
  let low = 0;
  let high = N - 1;
  let isExist = false;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (targetNums[i] < inputNums[mid]) {
      high = mid - 1;
    } else if (targetNums[i] > inputNums[mid]) {
      low = mid + 1;
    } else {
      answer += '1\n';
      isExist = true;

      break;
    }
  }

  if (!isExist) {
    answer += '0\n';
  }
}

console.log(answer.trim());