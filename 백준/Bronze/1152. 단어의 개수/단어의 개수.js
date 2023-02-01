const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let a = input[0];
let cnt = 0;
for(i=0; i<a.length; i++) {
    if(a[i] === ' ') {
        cnt++;
    }
}

if(a[0] === ' ' && a[a.length-1] !== ' ') {
    console.log(cnt);
}

else if(a[a.length-1] === ' ' && a[0] !== ' ') {
    console.log(cnt);
}

else if(a[0] === ' ' && a[a.length-1] === ' ') {
    console.log(cnt-1);
}

else {
    console.log(cnt+1);
}