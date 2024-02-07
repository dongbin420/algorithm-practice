const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs.readFileSync(filePath).toString().split('\n').map(line => line.replace(/\r/g, ''));

const N = Number(input[0]);
const ownCards = input[1].split(' ').map(num => Number(num));
const M = Number(input[2]);
const targetCards = input[3].split(' ').map(num => Number(num));

const ownCardsCountMap = new Map();

for (const num of ownCards) {
  ownCardsCountMap.set(num, (ownCardsCountMap.get(num) || 0) + 1);
}

const answer = [];

for (const targetNum of targetCards) {
  answer.push(ownCardsCountMap.get(targetNum) || 0);
}

console.log(answer.join(' '));