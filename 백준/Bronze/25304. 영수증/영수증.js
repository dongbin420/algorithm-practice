const fs = require('fs'); 
const input = fs.readFileSync('/dev/stdin').toString().split('\n'); 

let result = Number(input[0]);
let count = Number(input[1]);

let A = input[2].split(' ').map((item) => +item);
let B = A[0]*A[1]
for(let i = 2; i <= count; i++) {
    let C = input[i+1].split(' ').map((item) => +item);
    B += C[0]*C[1];
}

if(B == result) {
    console.log("Yes");
}
else {
    console.log("No");
}