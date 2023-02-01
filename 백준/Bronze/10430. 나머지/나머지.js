const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0];
input = input.split(' ');
input = input.map((item) => +item);

let A = input[0];
let B = input[1];
let C = input[2];

console.log((A+B)%C);
console.log(((A%C)+(B%C))%C);
console.log((A*B)%C);
console.log(((A%C)*(B%C))%C);