const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = BigInt(fs.readFileSync(filePath).toString());

let factorial = 1n;

for (let i = 2n; i <= input; i++) {
  factorial *= i;
}

const editedFactorial = String(factorial);
let answer = 0;

for (let j = editedFactorial.length - 1; j >= 0; j--) {
  if (editedFactorial[j] === '0') {
    answer++;
  } else {
    break; 
  }
}

console.log(answer);