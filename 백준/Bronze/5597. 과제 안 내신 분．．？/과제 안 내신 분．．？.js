const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input.map((item) => +item);

const A = Array(30).fill(0);

// for(i=0; i<30; i++) {
//     A[input[i]]++;
//     if(A[input[i]] === 0) {
//         console.log(i);
//     }
// }

for (i = 0; i < 28; i++) {
    A[input[i]-1]++;
}

for (i = 0; i < 30; i++) {
    if (A[i] === 0) {
        console.log(i+1);
    }
}