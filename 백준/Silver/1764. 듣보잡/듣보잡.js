const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(line => line.replace(/\r/g, ''));

const [N, M] = input.shift().split(' ').map(Number);
const hears = input.filter((person, idx) => idx < N).map((person) => [person, 1]);
const sees = input.filter((person, idx) => idx > N - 1);
const people = new Map(hears);
const picks = [];

for (let i = 0; i < sees.length; i++) {
  if (people.get(sees[i])) {
    picks.push(sees[i]);
  }
}

picks.sort();

console.log(picks.length);
console.log(picks.join('\n'));