const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().split('\n').map(line => line.replace(/\r/g, ''));

for (let i = 0; i < input.length; i++) {
  if (input[i] === '0') {
    break;
  }

  let editedNum = '';

  for (let j = input[i].length - 1; j >= 0; j--) {
    editedNum += input[i][j];
  }

  if (input[i] === editedNum) {
    console.log('yes');
  } else {
    console.log('no');
  }
}