const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString();

const editedInput = Number(input);

let iteratedNum = 666;
let i = 0;

while (true) {
  if (String(iteratedNum).includes('666')) {
    i++;
  }

  if (i === editedInput) {
    console.log(iteratedNum);
    
    break;
  }

  iteratedNum++;
}