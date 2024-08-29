const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((num) => Number(num));

const N = input.shift();
const sortedNums = input.sort((a, b) => a - b);

console.log(sortedNums.join('\n'));
