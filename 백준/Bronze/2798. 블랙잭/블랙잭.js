const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .split('\n')
  .map((line) => line.replace(/\r/g, ''));

const [N, M] = input.shift().split(' ').map(Number);
const cards = input[0].split(' ').map(Number);
let sum = 0;

for (let i = 0; i < N; i++) {
  let firstNum = cards[i];

  for (let j = i + 1; j < N; j++) {
    let secondNum = cards[j];

    for (let k = j + 1; k < N; k++) {
      let thirdNum = cards[k];
      let sumCandidate = firstNum + secondNum + thirdNum;

      if (sum < sumCandidate && sumCandidate <= M) {
        sum = sumCandidate;
      }
    }
  }
}

console.log(sum);
