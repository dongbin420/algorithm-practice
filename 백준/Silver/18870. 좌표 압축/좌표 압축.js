const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(line => line.replace(/\r/g, ''));

const N = Number(input.shift());
input = input[0].split(' ').map(Number);
const sortedInput = Array.from(new Set(input)).sort((a, b) => a - b);

function getCompressed(num) {
  let start = 0;
  let end = sortedInput.length - 1;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);

    if (sortedInput[mid] < num) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }

  return end;
}

console.log(input.map((num) => getCompressed(num)).join(' '));