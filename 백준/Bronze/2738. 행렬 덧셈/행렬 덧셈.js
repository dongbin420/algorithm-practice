const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let A = input[0].split(' ').map((item) => +item);
let a = '';

for(i=1; i<=A[0]; i++) {
    let B = input[i].split(' ').map((item) => +item);
    let C = input[i+A[0]].split(' ').map((item) => +item);
    for(j=0; j<A[1]; j++) {
        a += B[j]+C[j];
        if(j !== A[1]-1) {
            a += ' ';
          }
    }
    if(i !== A[0]) {
        a += '\n';
    }
}

console.log(a);