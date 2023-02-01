const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let A = Number(input[0]);

let answer = '';

// for(i = 1; i <= A; i++) {
//     console.log("*"*i);
// }

// console.log("싸발"*5); -> 이 방법 안될까? "*"*5 이거...

for(i = 1; i <= A; i++) {
    answer += "*";
    console.log(answer);
}