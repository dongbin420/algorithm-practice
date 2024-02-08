const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(line => line.replace(/\r/g, ''));

const testCase = Number(input.shift());
const editedInput = [];
const answer = [];

for (let i = 0; i < testCase * 2; i += 2) {
  const data1 = input[i].split(' ').map(Number);
  const data2 = input[i + 1].split(' ').map(Number);
  editedInput.push([data1, data2]);
}

for (let j = 0; j < testCase; j++) {
  const paperPriorArr = editedInput[j][1].map((priority, idx) => ({ priority, idx }));
  const targetNumIdx = editedInput[j][0][1];
  let cnt = 0;

  while (paperPriorArr.length > 0) {
    const firstNum = paperPriorArr[0];
    const highestPriority = Math.max(...paperPriorArr.map(obj => obj.priority));

    if (firstNum.priority === highestPriority && firstNum.idx === targetNumIdx) {
      cnt++;
      answer.push(cnt);

      break;
    } else if (firstNum.priority === highestPriority) {
      cnt++;
      paperPriorArr.shift();
    } else {
      paperPriorArr.push(paperPriorArr.shift());
    }
  }
}

console.log(answer.join('\n'));