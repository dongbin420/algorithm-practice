const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let a = String(input[0]);
let b = a.length;
let result = new Array(26).fill(0);

for(i=0; i < b; i++) {
    for(j=97; j<123; j++) {
        if(a[i].toLowerCase() === String.fromCharCode(j)) {
            result[j-97]++;
        }
    }
}

let max = Math.max(...result);
let index = result.indexOf(max);

let isSame = false;

for(k=0; k<26; k++) {
    if(result[k] === max && index !== k) {
        isSame = true;
        break;
    }
}

console.log(isSame ? "?" : String.fromCharCode(index+65));