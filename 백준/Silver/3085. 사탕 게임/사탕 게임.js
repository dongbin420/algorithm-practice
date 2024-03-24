const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(line => line.replace(/\r/g, ''));

const N = Number(input.shift());
input = input.map(line => line.split(''));
let answer = -Infinity;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (j < N - 1) {
      const first = input[i][j];
      const second = input[i][j + 1];
      input[i][j] = second;
      input[i][j + 1] = first;
      answer = Math.max(answer, getMaxCandies(i, j), getMaxCandies(i, j + 1));
      input[i][j] = first;
      input[i][j + 1] = second;
    }

    if (j < N - 1) {
      const first = input[j][i];
      const second = input[j + 1][i];
      input[j][i] = second;
      input[j + 1][i] = first;
      answer = Math.max(answer, getMaxCandies(j, i), getMaxCandies(j + 1, i));
      input[j][i] = first;
      input[j + 1][i] = second;
    }
  }
}

function getMaxCandies(x, y) {
  let maxCandiesCol = 1;
  let maxCandiesRow = 1;

  for (let i = y - 1; i >= 0; i--) {
    if (input[x][y] === input[x][i]) {
      maxCandiesCol++;
    } else {
      break;
    }
  }

  for (let i = y + 1; i < N; i++) {
    if (input[x][y] === input[x][i]) {
      maxCandiesCol++;
    } else {
      break;
    }
  }

  for (let i = x - 1; i >= 0; i--) {
    if (input[x][y] === input[i][y]) {
      maxCandiesRow++;
    } else {
      break;
    }
  }

  for (let i = x + 1; i < N; i++) {
    if (input[x][y] === input[i][y]) {
      maxCandiesRow++;
    } else {
      break;
    }
  }

  return Math.max(maxCandiesRow, maxCandiesCol);
}

console.log(answer);