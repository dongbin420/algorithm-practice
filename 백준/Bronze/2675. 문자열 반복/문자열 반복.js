const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let testCase = input[0];

for(i=1; i<=testCase; i++) {
    input[i] = String(input[i]);
    let R = +input[i][0];
    let a = '';
    for(j=2; j<=input[i].trim().length-1; j++) {
        a = a + Array(R+1).join(input[i][j]);
    }
    console.log(a);
}
