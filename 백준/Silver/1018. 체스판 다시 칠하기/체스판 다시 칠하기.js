const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().split('\n').map(line => line.replace(/\r/g, ''));

const [firstNum, secondNum] = input[0].split(' ').map(num => Number(num));
input.shift();

function countMismatch(row, col, patternCase, input) {
    const line = ['WBWBWBWB', 'BWBWBWBW'];
    let count = 0;

    for (let l = 0; l < 8; l++) {
        for (let m = 0; m < 8; m++) {
            if (input[row + l][col + m] !== line[(l + patternCase) % 2][m]) {
              count++;
            }
        }
    }
    
    return count;
}

function findMinimumMismatch(firstNum, secondNum, input) {
    const answer = [];

    for (let i = 0; i <= firstNum - 8; i++) {
        for (let j = 0; j <= secondNum - 8; j++) {
          for (let k = 0; k < 2; k++) {
            const count = countMismatch(i, j, k, input);
            answer.push(count);
          }
        }
    }

    return Math.min(...answer);
}

const minimum = findMinimumMismatch(firstNum, secondNum, input); 
console.log(minimum);
