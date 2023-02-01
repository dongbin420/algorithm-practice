const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let A = +input[0];
let C = +input[2];
let count = 0;

for(i=0; i<A; i++) {
    let B = input[1].split(' ').map((item) => +item);
    if(B[i] === C) {
        count++;
    }
}

console.log(count);