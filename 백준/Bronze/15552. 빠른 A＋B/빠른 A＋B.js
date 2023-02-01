const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let A = Number(input[0]);
let answer = ''; //이 따옴표가 무슨값일까???

for(i = 1; i <= A; i++) {
    let[B, C] = input[i].split(' ');
    answer += Number(B)+Number(C) + "\n";
}

console.log(answer);