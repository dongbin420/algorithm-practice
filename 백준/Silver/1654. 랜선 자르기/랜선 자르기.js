const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .split('\n')
  .map((line) => line.replace(/\r/g, ''));

const [N, K] = input.shift().split(' ').map(Number);
const numInput = input.map(Number);
let high = Math.max(...input);
let low = 1;
let result = 0;

// low와 high 사이에서 원하는 값을 찾는건데, low가 high보다 커지면, 모든 범위를 다 검사했다는 뜻이니 이 조건을 세워 while문을 멈춰야함. 그 시점에서 우리는 최대값을 구할 수 있게 됨(가능한 모든 수를 검사하고 나온 결과 이기 때문)
while (low <= high) {
  const mid = Math.floor((low + high) / 2);
  let cutCable = 0;

  for (let i = 0; i < numInput.length; i++) {
    cutCable += Math.floor(numInput[i] / mid);
  }

  if (cutCable >= K) {
    result = mid; // 정답이 될 수도 있는 후보 정답을 저장하는 단계
    low = mid + 1; // 결과가 타겟보다 더 많은 랜선을 만들거나, 타겟에 맞는 랜선을 만들기 때문에 더 긴 랜선을 찾아야 함.
  } else {
    high = mid - 1; // 결과가 타겟보다 더 적은 랜선을 만들기에, 랜선의 길이의 범위를 줄여야함.
  }
}

console.log(result);