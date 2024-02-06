const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(line => line.replace(/\r/g, '').split(' ').map(num => Number(num)));

const answer = [];

for (let i = 0; i < input.length; i++) {
  if (input[i][0] === 0 && input[i][1] === 0 && input[i][2] === 0) {
    break;
  }

  const sortedInput = input[i].sort((a, b) => a - b);
  const [firstSide, secondSide, thirdSide] = sortedInput;

  const isRight = (firstSide ** 2 + secondSide ** 2) === thirdSide ** 2 ? 'right' : 'wrong';
  answer.push(isRight);
}

// if (answer.length > 0) {
//   console.log(answer.join('\n'));
// }

console.log(answer.join('\n'));