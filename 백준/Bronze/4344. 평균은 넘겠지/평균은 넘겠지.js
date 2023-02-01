const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let A = +input[0];

for(i=1; i<=A; i++) {
    let B = input[i].split(' ').map((item) => +item);
    let a = 0;
    let b = 0;
    
    for(j=1; j<=B[0]; j++) {
        a = a + B[j]; // B[1]~B[B[0]]까지 더해서 B[0]로 나눈값 구해야함
    }

    let Aver = a/B[0];

    for(k=1; k<=B[0]; k++) {
        if(B[k]>Aver) {
            b++;
        }
    }
    console.log((b/B[0]*100).toFixed(3)+'%');
}