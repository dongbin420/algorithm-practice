const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map((line) => line.replace(/\r/g, ''));

const [N, r, c] = input.map(Number);

const visitTarget = (power, row, column, startRow, startCol) => {
  if (power === 0) return 0;

  const size = Math.pow(2, power);
  const half = size / 2;

  if (row < startRow + half && column < startCol + half) {
    // Top left quadrant
    return visitTarget(power - 1, row, column, startRow, startCol);
  } else if (row < startRow + half) {
    // Top right quadrant
    return half * half + visitTarget(power - 1, row, column, startRow, startCol + half);
  } else if (column < startCol + half) {
    // Bottom left quadrant
    return 2 * half * half + visitTarget(power - 1, row, column, startRow + half, startCol);
  } else {
    // Bottom right quadrant
    return 3 * half * half + visitTarget(power - 1, row, column, startRow + half, startCol + half);
  }
};

console.log(visitTarget(N, r, c, 0, 0));