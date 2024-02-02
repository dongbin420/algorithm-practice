const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs.readFileSync(filePath).toString();

const editedInput = Number(input);

function findMinimumRoom(n) {
  let rooms = 1;
  let count = 1;

  while (rooms < n) {
    rooms += 6 * count;
    count++;
  }

  return count;
}

const result = findMinimumRoom(editedInput);
console.log(result);