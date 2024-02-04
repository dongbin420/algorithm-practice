const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ').map(line => line.replace(/\r/g, ''));

let firstNum = Number(input[0]);
let secondNum = Number(input[1]);

let testNum = 1;
const divisors = [];

while (testNum <= Math.min(firstNum, secondNum)) {
  if (firstNum % testNum === 0 && secondNum % testNum === 0) {
    divisors.push(testNum);
  }

  testNum++;
}

const maxDivisor = Math.max(...divisors);
const minMultiple = firstNum * secondNum / maxDivisor;

console.log(maxDivisor);
console.log(minMultiple);