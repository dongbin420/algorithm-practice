const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input.map((item) => +item);

let A = input[0];

if (A%4 == 0 && A%100 !== 0) {
    console.log(1);
}
else if (A%400 == 0) {
    console.log(1);
}
else {
    console.log(0);
}