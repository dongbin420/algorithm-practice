const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let A = +input[0];
let B = input[1].split(' ').map((item) => +item);

let max = B[0];

for(i=0; i<A; i++) {
    if(max<B[i]) {
        max = B[i];
    }
}

let C = 0;

for(i=0; i<A; i++) {
    C = C+B[i]/max*100
}

console.log(C/A);
