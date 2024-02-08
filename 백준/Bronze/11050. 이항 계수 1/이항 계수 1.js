const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ').map(num => Number(num));

function factorial(num) {
  let result = 1;

  for (let i = 2; i <= num; i++) {
    result *= i;
  }

  return result;
}

const result = factorial(input[0]) / (factorial((input[0] - input[1])) * factorial(input[1])); 

console.log(result);