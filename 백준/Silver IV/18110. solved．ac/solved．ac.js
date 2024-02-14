const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(line => Number(line.replace(/\r/g, '')));

const n = input.shift();
input.sort((a, b) => a - b);

function getAverageRank(participant) {

  if (n === 0) {
    return 0;
  }

  const removedPeopleNum = Math.round(participant * 15 / 100);
  const targetPeopleNum = participant - (2 * removedPeopleNum);
  let sumOfRank = 0;

  for (let i = removedPeopleNum; i < n - removedPeopleNum; i++) {
    sumOfRank += input[i];
  }

  const result = Math.round(sumOfRank / targetPeopleNum);

  return result;
}

console.log(getAverageRank(n));