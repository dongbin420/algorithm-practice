const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = BigInt(fs.readFileSync(filePath).toString());

let factorialResult = 1n;
let answer = 0;

for (let i = 2n; i <= input; i++) {
  factorialResult *= i;
}

for (let j = String(factorialResult).length - 1; j >= 0; j--) {
  if (String(factorialResult)[j] === '0') {
    answer++;
  } else {
    break;
  }
}

console.log(answer);