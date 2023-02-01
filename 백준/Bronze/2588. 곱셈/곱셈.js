const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input.map((item) => +item);

let A = input[0];
let B = input[1];

let num1 = B%10;
let num2 = (B%100-num1)/10;
let num3 = (B-(B%100))/100;

console.log(A*num1);
console.log(A*num2);
console.log(A*num3);
console.log(A*B);
