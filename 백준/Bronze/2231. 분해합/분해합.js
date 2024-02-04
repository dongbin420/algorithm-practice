const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs.readFileSync(filePath).toString().trim();

const editedInput = Number(input);
let answerNum = 1;
const answer = [];

while (answerNum < editedInput) {
  const stringAnswerNum = String(answerNum);
  let sum = answerNum;

  for (let i = 0; i < stringAnswerNum.length; i++) {
    sum += Number(stringAnswerNum[i]);
  }

  if (sum === editedInput) {
    answer.push(answerNum);
  }

  answerNum++;
}

if (answer.length > 0) {
  console.log(Math.min(...answer));
} else {
  console.log('0');
}
