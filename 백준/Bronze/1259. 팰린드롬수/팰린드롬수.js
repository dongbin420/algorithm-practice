const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .split('\n')
  .map((line) => line.replace(/\r/g, ''));

for (let i = 0; i < input.length; i++) {
  if (input[i] === '0') {
    break;
  }

  const reversed = input[i].split('').reverse().join('');

  if (input[i] === reversed) {
    console.log('yes');
  } else {
    console.log('no');
  }
}
