const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(num => Number(num));

const N = input.shift();

// 일반 정렬 메서드 쓴 코드
input.sort((a, b) => a - b);

console.log(input.join('\n'));