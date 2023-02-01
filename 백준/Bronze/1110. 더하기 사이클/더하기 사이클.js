const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let N = input[0];

let ten = parseInt(N/10);

let one = parseInt(N-(ten*10));

let count = 0;
let result = null;

while(true) {
    result = ten+one
    result = (one * 10) + (result-(parseInt(result/10)*10));
    ten = parseInt(result/10);
    one = parseInt(result - (ten*10));
    count += 1;
    if(result == N) {
        break;
    }
}

console.log(count);