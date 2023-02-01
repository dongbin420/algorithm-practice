const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input.map((item) => +item);

let max = input[0];

for(i=1; i<9; i++) {
    if(max<input[i]) {
        max = input[i];    
    }
}

for(i=0; i<9; i++) {
    if(max === input[i]) {
        console.log(max);
        console.log(i+1);
    }
}