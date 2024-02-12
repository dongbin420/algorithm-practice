const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(line => Number(line.replace(/\r/g, '')));

const N = input.shift();

let sum = 0;
const freqMap = new Map();
input.sort((a, b) => a - b);

for (let i = 0; i < N; i++) {
  sum += input[i];
  freqMap.set(input[i], (freqMap.get(input[i]) || 0) + 1);
}

const mean = Math.round(sum / N);
const median = input[Math.floor(N / 2)];

let maxFreq = 0;
let maxFreqNums = [];

for (const [num, freq] of freqMap) {
  if (freq > maxFreq) {
    maxFreq = freq;
    maxFreqNums = [num];
  } else if (freq === maxFreq) {
    maxFreqNums.push(num);
  }
}

const maxFreqNum = maxFreqNums.length === 1 ? maxFreqNums[0] : maxFreqNums[1];
const range = input[N - 1] - input[0];

console.log([mean, median, maxFreqNum, range].join('\n'));