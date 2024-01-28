const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().split('\n').map(line => line.replace(/\r/g, ''));

const [firstNum, secondNum] = input[0].split(' ').map(num => Number(num));
input.shift();

function countMismatch(row, col, input) {
    const line = ['WBWBWBWB', 'BWBWBWBW'];
    let count = 0;

    for (let l = 0; l < 8; l++) {
        for (let m = 0; m < 8; m++) {
            if (input[row + l][col + m] !== line[l % 2][m]) {
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
            const count = countMismatch(i, j, input);
            answer.push(count, 64-count);
        }
    }

    return Math.min(...answer);
}

const minimum = findMinimumMismatch(firstNum, secondNum, input); 
console.log(minimum);