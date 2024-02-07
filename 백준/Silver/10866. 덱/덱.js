const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs.readFileSync(filePath).toString().split('\n').map(line => line.replace(/\r/g, ''));

const N = Number(input.shift());
const deque = [];
const answer = [];

for (let i = 0; i < N; i++) {
  const [command, number] = input[i].split(' ').map((ele, idx) => idx === 1 ? Number(ele) : ele);

  switch (command) {
    case 'push_front':
      deque.unshift(number);
      break;
    case 'push_back':
      deque.push(number);
      break;
    case 'pop_front':
      deque.length === 0 ? answer.push('-1') : answer.push(deque.shift());
      break;
    case 'pop_back':
      deque.length === 0 ? answer.push('-1') : answer.push(deque.pop());
      break;
    case 'size':
      answer.push(deque.length);
      break;
    case 'empty':
      deque.length === 0 ? answer.push('1') : answer.push('0');
      break;
    case 'front':
      deque.length === 0 ? answer.push('-1') : answer.push(deque[0]);
      break;
    case 'back':
      deque.length === 0 ? answer.push('-1') : answer.push(deque[deque.length - 1]);
      break;
    default:
      break;
  }
}

console.log(answer.join('\n'));