const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .split('\n')
  .map((line) => line.replace(/\r/g, ''));

const N = Number(input.shift());
const numInput = input.map(Number);
const stack = [];
let answer = '';
let current = 1;

for (let i = 0; i < N; i++) {
  while (current <= numInput[i]) {
    // 스택에 넣으려는 수가 타겟 수열의 수 보다 작거나 같아야 타겟 수열의 수가 스택에 들어갈 수 있게 됨, 타겟 수열의 수가 스택에 들어간 시점에서 종료해야함. 해당 수를 빼내야 하기 때문
    stack.push(current);
    answer += '+\n';

    current++;
  }

  if (stack[stack.length - 1] === numInput[i]) {
    stack.pop();
    answer += '-\n';
  } else {
    // 스택의 특성상, 위의 로직에 따라 숫자를 넣었을 때 현재 타겟 넘버가 끝의 수와 같지 않으면 이는 스택으로 가능하지 않음을 의미
    answer = 'NO';

    break;
  }
}

console.log(answer.trim());