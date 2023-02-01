const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input.map((item) => +item);

let A = input[0];

if (90 <= A && A <= 100) {
    console.log("A");
}
else if (80 <= A && A <= 89) {
    console.log("B");
}
else if (70 <= A && A <= 79) {
    console.log("C");
}
else if (60 <= A && A <= 69) {
    console.log("D");
}
else {
    console.log("F");
}