const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().split('\n').map(line => line.replace(/\r/g, ''));

const [ownCable, targetNum] = input.shift().split(' ');
let low = 1; 
let high = Math.max(...input);
let result = 0;

while (low <= high) {
  let mid = Math.floor((low + high) / 2);
  let cutCable = 0;

  for (let i = 0; i < ownCable; i++) {
    cutCable += Math.floor(input[i] / mid);
  }

  if (cutCable < targetNum) {
    high = mid - 1;
  } else {
    result = mid;
    low = mid + 1;
  }
}

console.log(result);