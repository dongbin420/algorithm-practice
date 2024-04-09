// 백준 1620
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(line => line.replace(/\r/g, ''));

const [N, M] = input.shift().split(' ').map(Number);
const pocketmons = input.slice(0, N);
const questions = input.slice(N);
const book = new Map();
const reverseBook = new Map();
const answer = [];

for (let i = 0; i < N; i++) {
  book.set(pocketmons[i], i + 1);
  reverseBook.set(i + 1, pocketmons[i]);
}

for (let j = 0; j < M; j++) {
  if (!isNaN(questions[j])) {
    answer.push(reverseBook.get(Number(questions[j])));
  } else {
    answer.push(book.get(questions[j]));
  }
}

console.log(answer.join('\n'));