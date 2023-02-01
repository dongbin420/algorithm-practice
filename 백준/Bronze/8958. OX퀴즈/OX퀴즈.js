const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let A = +input[0];

for(i=1; i<A+1; i++) {
    let count = 0;
    let sum = 0;
    for(j=0; j<input[i].length; j++) {
        if(input[i][j] === 'O') {
            count++
        }
        else {
            count = 0;
        }
        sum += count;
    }
    console.log(sum);
}