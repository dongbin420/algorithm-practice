const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

const [N, K] = input;
const MAX = 100001;
let visitTimes = Array(MAX).fill(0);
let queue = [N];

visitTimes[N] = 1;

while (queue.length !== 0) {
  const now = queue.shift();

  if (now === K) {
    console.log(visitTimes[now] - 1);
    break;
  }

  for (let next of [now - 1, now + 1, now * 2]) {
    if (next < 0 || next >= MAX) continue;
    if (visitTimes[next] === 0) {
      visitTimes[next] = visitTimes[now] + 1;
      queue.push(next);
    }
  }
}