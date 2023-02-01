const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0].split(' ').map((item) => +item);

function solution(A, B, C) {
    if(A == B && B == C) {
        console.log(10000+A*1000);
    }
    else if(A == B || A == C ) {
        console.log(1000+A*100);
    }
    else if(B == C) {
        console.log(1000+B*100);
    }
    else {
        if (A > B && A > C) {
            console.log(A*100);
        }
        else if (B > A && B > C) {
            console.log(B*100);
        }
        else {
            console.log(C*100);
        }
    }
}

solution(input[0], input[1], input[2]);