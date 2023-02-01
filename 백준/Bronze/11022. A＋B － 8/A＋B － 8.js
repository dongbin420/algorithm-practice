const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let A = Number(input[0]);

for(i = 1; i <= A; i++) {
    let [B, C] = input[i].split(' ');
    console.log("Case #"+i+":",B,"+",C,"=",Number(B)+Number(C));
}