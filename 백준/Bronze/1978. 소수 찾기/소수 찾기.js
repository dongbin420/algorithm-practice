const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .split('\n')
  .map((line) => line.replace(/\r/g, ''));

const N = Number(input.shift());
const numInput = input[0].split(' ').map(Number);
const primeNums = Array(Math.max(...numInput) + 1).fill(true);
primeNums[0] = primeNums[1] = false;
let cnt = 0;

// max의 제곱근 까지만 소수를 검사하면 되는 이유는, max보다 작은 수의 제곱이 max보다 크면 이 max를 커버할 수 있기 때문(?)
for (let i = 2; i <= Math.sqrt(Math.max(...numInput)); i++) {
  for (let j = i * i; j <= Math.max(...numInput); j += i) {
    primeNums[j] = false;
  }
}

for (let num of numInput) {
  if (primeNums[num]) {
    cnt++;
  }
}

console.log(cnt);