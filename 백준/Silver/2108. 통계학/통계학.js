const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(line => Number(line.replace(/\r/g, '')));

const N = input.shift();

let sum = 0;

for (let i = 0; i < N; i++) {
  sum += input[i];
}

let firstStatisticsValue = (sum / N).toFixed();

if (firstStatisticsValue === '-0') {
  firstStatisticsValue = 0;
}

input.sort((a, b) => a - b);

const secondStatisticsValue = input[Math.floor(input.length / 2)];

const map = new Map();

for (let j = 0; j < N; j++) {
  const key = input[j];
  const currentValue = map.get(key) || 0;
  map.set(key, currentValue + 1);
}

const frequency = [];

for (const [key, value] of map) {
  frequency.push(value);
}

const mostFrequency = Math.max(...frequency);
const mostFrequencyList = [];

for (const [key, value] of map) {
  if (value === mostFrequency) {
    mostFrequencyList.push(key);
  }
}

let thirdStatisticsValue;

if (mostFrequencyList.length === 1) {
  thirdStatisticsValue = mostFrequencyList[0];
} else {
  thirdStatisticsValue = mostFrequencyList[1];
}

const fourthStatisticsValue = Math.max(...input) - Math.min(...input);

console.log([firstStatisticsValue, secondStatisticsValue, thirdStatisticsValue, fourthStatisticsValue].join('\n'));