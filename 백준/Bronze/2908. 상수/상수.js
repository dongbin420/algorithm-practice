const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input[0] = input[0].split(' ').map((item) => +item);

let a = String(input[0][0]);
let b = String(input[0][1]);

let c = a[2]+a[1]+a[0];
let d = b[2]+b[1]+b[0];

if(c>d) {
    console.log(c);
}
else if(d>c) {
    console.log(d);
}
