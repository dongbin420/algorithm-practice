const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(line => line.replace(/\r/g, ''));

const N = Number(input.shift());
const paper = input.map((line) => line.split(' ').map(Number));

const checkSameColor = (rowStart, rowEnd, colStart, colEnd) => {
  const color = paper[rowStart][colStart];

  for (let i = rowStart; i < rowEnd; i++) {
    for (let j = colStart; j < colEnd; j++) {
      if (paper[i][j] !== color) return false;
    }
  }

  return true;
}

const countSquares = (rowStart, rowEnd, colStart, colEnd) => {
  if (checkSameColor(rowStart, rowEnd, colStart, colEnd)) {
    const color = paper[rowStart][colStart];

    return [color === 0 ? 1 : 0, color === 1 ? 1 : 0];
  }

  const midRow = (rowStart + rowEnd) / 2;
  const midCol = (colStart + colEnd) / 2;

  const [whiteNW, blueNW] = countSquares(rowStart, midRow, colStart, midCol);
  const [whiteNE, blueNE] = countSquares(rowStart, midRow, midCol, colEnd);
  const [whiteSW, blueSW] = countSquares(midRow, rowEnd, colStart, midCol);
  const [whiteSE, blueSE] = countSquares(midRow, rowEnd, midCol, colEnd);

  return [whiteNW + whiteNE + whiteSW + whiteSE, blueNW + blueNE + blueSW + blueSE];
}

console.log(countSquares(0, N, 0, N).join('\n'));
