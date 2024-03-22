const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(line => line.replace(/\r/g, ''));

const N = Number(input.shift());
input = input.map(line => line.split(''));
let answer = 0;

function getMaxCandy(arr) {
  let maxCandyCnt = 0;

  for (let i = 0; i < N; i++) {
    let testNumRow = 1;
    let testNumCol = 1;

    for (let j = 0; j < N; j++) {
      if (j < N - 1 && arr[i][j] === arr[i][j + 1]) {
        testNumRow++;
      } else {
        maxCandyCnt = Math.max(maxCandyCnt, testNumRow);
        testNumRow = 1;
      }

      if (j < N - 1 && arr[j][i] === arr[j + 1][i]) {
        testNumCol++;
      } else {
        maxCandyCnt = Math.max(maxCandyCnt, testNumCol);
        testNumCol = 1;
      }
    }
  }

  return maxCandyCnt;
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (j < N - 1 && input[i][j] !== input[i][j + 1]) {
      [input[i][j], input[i][j + 1]] = [input[i][j + 1], input[i][j]];
      answer = Math.max(getMaxCandy(input), answer);
      [input[i][j], input[i][j + 1]] = [input[i][j + 1], input[i][j]];
    }

    if (i < N - 1 && input[i][j] !== input[i + 1][j]) {
      [input[i][j], input[i + 1][j]] = [input[i + 1][j], input[i][j]];
      answer = Math.max(getMaxCandy(input), answer);
      [input[i][j], input[i + 1][j]] = [input[i + 1][j], input[i][j]];
    }
  }
}

console.log(answer);