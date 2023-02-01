const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let a = +input[0];
let b = 0;
let c = String(input[1]);


for(i=0; i<a; i++) {
    b += +c[i];
}

console.log(b);