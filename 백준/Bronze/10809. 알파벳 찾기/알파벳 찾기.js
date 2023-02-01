const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


let word = input[0];
let wordLength = word.length;
let arr = word.split('');
let answer = '';
let alpabet = 'abcdefghijklmnopqrstuvwxyz';

for(j=0; j<26; j++) {
    if(arr.includes(alpabet[j])) {
        for (i = 0; i < wordLength; i++) {
            if (alpabet[j] === word[i]) {
                answer += i+' ';
                break;
            }
        }
    }
    else {
        answer += -1+' ';
    }
}

console.log(answer);