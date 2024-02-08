const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(line => line.replace(/\r/g, ''));

const testCase = Number(input.shift());
const answer = [];

for (let i = 0; i < testCase; i++) {
  let [total, targetIdx] = input.shift().split(' ').map(Number);
  const priorities = input.shift().split(' ').map(Number);
  let cnt = 0;

  while (true) {
    const front = priorities.shift();

    if (priorities.some(priority => priority > front)) {
      priorities.push(front);

      if (targetIdx === 0) {
        targetIdx = priorities.length - 1;
      } else {
        targetIdx--;
      }
    } else {
      cnt++;

      if (targetIdx === 0) {
        answer.push(cnt);

        break;
      } else {
        targetIdx--;
      }
    }
  }
}

console.log(answer.join('\n'));