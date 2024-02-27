const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(line => Number(line.replace(/\r/g, '')));

const T = input.shift();

const fibonacciMemo = (n, memo) => {
  if (n === 0) return [1, 0];
  if (n === 1) return [0, 1];

  if(!memo[n]) {
    const [zero1, one1] = fibonacciMemo(n - 1, memo);
    const [zero2, one2] = fibonacciMemo(n - 2, memo);
    memo[n] = [zero1 + zero2, one1 + one2];
  }

  return memo[n];
}

input.forEach((target) => {
  const memo = [];
  const [zero, one] = fibonacciMemo(target, memo);
  console.log(`${zero} ${one}`);
})