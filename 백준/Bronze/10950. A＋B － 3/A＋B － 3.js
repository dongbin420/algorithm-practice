const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let T = +input[0];
for(let i = 1; i <= T; i++) {
    input[i] = input[i].split(' ').map((item) => +item);
    console.log(input[i][0]+input[i][1]);
}
