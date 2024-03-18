const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs.readFileSync(filePath).toString().split('\n').map(line => line.replace(/\r/g, ''));

const [numOftrees, goal] = input[0].split(' ').map(Number);
const trees = input[1].split(' ').map(Number);

let low = 0;
let high = Math.max(...trees);
let answer = 0; 

while (low <= high) {
  let mid = Math.floor((low + high) / 2);
  let total = 0;

  trees.forEach((tree) => {
    if (tree > mid) {
      total += tree - mid;
    }
  })

  if (total >= goal) {
    answer = mid;
    low = mid + 1;
  } else {
    high = mid - 1;
  }
}

console.log(answer);