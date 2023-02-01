const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0];
input = input.split(' ');
input = input.map((item) => +item);

let A = input[0];
let B = input[1];

if(A>B) {
    console.log(">");
}

else if(A<B) {
    console.log("<");
}

else {
    console.log("==");
}