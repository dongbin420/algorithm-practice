const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .split('\n')
  .map((line) => line.replace(/\r/g, ''));

const [N, M] = input.shift().split(' ').map(Number);
const numOfSquare = [];
const whitePattern = [
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
];
const blackPattern = [
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
];

const checkChessBoard = (startX, startY, pattern) => {
  let cnt = 0;

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (input[startX + i][startY + j] !== pattern[i][j]) {
        cnt++;
      }
    }
  }

  return cnt;
};

for (let k = 0; k <= N - 8; k++) {
  for (let l = 0; l <= M - 8; l++) {
    numOfSquare.push(checkChessBoard(k, l, whitePattern));
    numOfSquare.push(checkChessBoard(k, l, blackPattern));
  }
}

console.log(Math.min(...numOfSquare));