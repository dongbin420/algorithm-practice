const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0];
input = input.split(' ');
input = input.map((item) => +item);

let num1 = 1-input[0];
let num2 = 1-input[1];
let num3 = 2-input[2];
let num4 = 2-input[3];
let num5 = 2-input[4];
let num6 = 8-input[5];

console.log(num1,num2,num3,num4,num5,num6);