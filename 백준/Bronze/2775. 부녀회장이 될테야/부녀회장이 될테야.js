const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(line => Number(line.replace(/\r/g, '')));

const T = input.shift();
const answer = [];

const memo = new Map();

function getLivingPeople(floor, room) {
  if (floor === 0) {
    return room;
  }

  if (memo.has(`${floor}-${room}`)) {
    return memo.get(`${floor}-${room}`);
  }

  let total = 0;
  
  for (let i = 1; i <= room; i++) {
    total += getLivingPeople(floor - 1, i);
  }

  memo.set(`${floor}-${room}`, total);
  return total;
}

for (let j = 0; j < T * 2; j += 2) {
  const people = getLivingPeople(input[j], input[j + 1]);
  answer.push(people);
}

console.log(answer.join('\n'));