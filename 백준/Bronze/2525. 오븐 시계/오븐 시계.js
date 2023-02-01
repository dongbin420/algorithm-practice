const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let currentTime = input[0].split(' ').map((item) => +item);
let cookingTime = +input[1]

function solution(H, M, C) {
    M += C
    if (M >= 60) {
        H += Math.floor(M/60);
        M %= 60;
    }
    if (H > 23) {
        H = H-24;
    }
    console.log(H, M);
}

solution(currentTime[0], currentTime[1], cookingTime);
