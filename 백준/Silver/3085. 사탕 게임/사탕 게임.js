const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(line => line.replace(/\r/g, ''));

const N = Number(input.shift());
input = input.map(line => line.split(''));
let answer = -Infinity;

function getMaxCandy(arr) {
  let maxCandyCnt = 0;

  for (let i = 0; i < N; i++) {
    let rowCnt = 1;
    let colCnt = 1;

    for (let j = 0; j < N; j++) {
      if (j < N - 1 && arr[i][j] === arr[i][j + 1]) {
        rowCnt++;
      } else {
        maxCandyCnt = Math.max(maxCandyCnt, rowCnt);
        rowCnt = 1;
      }

      if (j < N - 1 && arr[j][i] === arr[j + 1][i]) {
        colCnt++;
      } else {
        maxCandyCnt = Math.max(maxCandyCnt, colCnt);
        colCnt = 1;
      }
    }
  }

  return maxCandyCnt;
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (j < N - 1 && input[i][j] !== input[i][j + 1]) {
      const first = input[i][j];
      const second = input[i][j + 1];
      input[i][j] = second;
      input[i][j + 1] = first;
      answer = Math.max(answer, getMaxCandy(input));
      input[i][j] = first;
      input[i][j + 1] = second;
    }

    if (j < N - 1 && input[j][i] !== input[j + 1][i]) {
      const first = input[j][i];
      const second = input[j + 1][i];
      input[j][i] = second;
      input[j + 1][i] = first;
      answer = Math.max(answer, getMaxCandy(input));
      input[j][i] = first;
      input[j + 1][i] = second;
    }
  }
}

console.log(answer);