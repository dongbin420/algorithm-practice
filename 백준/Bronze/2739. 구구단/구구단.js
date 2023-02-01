const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let A = Number(input[0]);

for (let i=1; i<10; i++) {
    console.log(`${A} * ${i} = ${A*i}`);
}