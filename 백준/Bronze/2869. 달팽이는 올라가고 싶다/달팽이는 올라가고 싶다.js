const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ').map(line => Number(line.replace(/\r/g, '')));

const A = input[0];
const B = input[1];
const V = input[2];

const days = Math.ceil((V - B) / (A - B));

console.log(days);