const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(line => line.replace(/\r/g, ''));

const [N, M] = input.shift().split(' ').map(Number);
const heard = new Set(input.slice(0, N));
const seen = input.slice(N);
const picks = seen.filter(person => heard.has(person)).sort();

console.log(picks.length);
console.log(picks.join('\n'));