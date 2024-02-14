const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(line => line.replace(/\r/g, ''));

const firstInput = input.shift();
let [length, width, B] = firstInput.split(' ').map(Number);

const siteForHouse = input.map(line => line.split(' ').map(Number));

let minHeight = 256;
let maxHeight = 0;

for (let i = 0; i < length; i++) {
  for (let j = 0; j < width; j++) {
    minHeight = Math.min(minHeight, siteForHouse[i][j]);
    maxHeight = Math.max(maxHeight, siteForHouse[i][j]);
  }
}

let resultTime = Infinity;
let resultHeight = -1;

for (let k = minHeight; k <= maxHeight; k++) {
  let time = 0;
  let inventory = B;

  for (let l = 0; l < length; l++) {
    for (let m = 0; m < width; m++) {
      let diff = siteForHouse[l][m] - k;

      if (diff > 0) {
        time += diff * 2;
        inventory += diff;
      } else if (diff < 0) {
        time -= diff;
        inventory += diff;
      }
    }
  }

  if (inventory >= 0) {
    if (time < resultTime || (time === resultTime && k > resultHeight)) {
      resultTime = time;
      resultHeight = k;
    }
  }
}

console.log(resultTime, resultHeight);