const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = String(input);
let a = input.length;
let time = 0;

for(i=0; i<a; i++) {
    
    if(input[i] === 'A' || input[i] === 'B' || input[i] === 'C') {
        time = time+3;
    }
    else if(input[i] === 'D' || input[i] === 'E' || input[i] === 'F') {
        time = time+4;
    }
    else if(input[i] === 'G' || input[i] === 'H' || input[i] === 'I') {
        time = time+5;
    }
    else if(input[i] === 'J' || input[i] === 'K' || input[i] === 'L') {
        time = time+6;
    }
    else if(input[i] === 'M' || input[i] === 'N' || input[i] === 'O') {
        time = time+7;
    }
    else if(input[i] === 'P' || input[i] === 'Q' || input[i] === 'R' || input[i] === 'S') {
        time = time+8;
    }
    else if(input[i] === 'T' || input[i] === 'U' || input[i] === 'V') {
        time = time+9;
    }
    else if(input[i] === 'W' || input[i] === 'X' || input[i] === 'Y' || input[i] === 'Z') {
        time = time+10;
    }
}
console.log(time);