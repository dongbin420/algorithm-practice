const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let A = input[0].split(' ').map((item) => +item);


let B = input[1].split(' ').map((item) => +item);

let result = '';

for(i=0; i<A[0]; i++) {
    if(B[i]<A[1]) {
        result += B[i] + ' ';
    }
}

console.log(result);