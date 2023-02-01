const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let i = 0;

while(true) { 
    input[i] = input[i].split(' ').map((item) => +item);
    if(input[i][0] == 0 && input[i][1] == 0) {
        break;
    }
    console.log(input[i][0]+input[i][1]);
    i += 1;
}