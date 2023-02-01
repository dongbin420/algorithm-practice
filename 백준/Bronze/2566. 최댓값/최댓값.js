const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input.map((a) => a.split(' ').map(Number));

let max = 0;
let x = 0, y = 0;

for(i=0; i<9; i++) {
  for(j=0; j<9; j++) {
    if(input[i][j] > max) {
      max = input[i][j];
      x = i;
      y = j;
    }
  }
}

console.log(max);
console.log(x+1,y+1);