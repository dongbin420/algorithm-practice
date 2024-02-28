const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(line => line.replace(/\r/g, ''));

const N = Number(input.shift());
const map = input.map((row) => row.split('').map(Number));
const visited = Array.from(Array(N), () => Array(N).fill(false));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const bfs = (startX, startY) => {
  const queue = [[startX, startY]];
  visited[startX][startY] = true;
  let cnt = 1;

  while (queue.length !== 0) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && nx < N && ny >= 0 && ny < N && map[nx][ny] === 1 && !visited[nx][ny]) {
        cnt++;
        visited[nx][ny] = true;
        queue.push([nx, ny]);
      }
    }  
  }

  return cnt;
}

const answer = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (map[i][j] === 1 && !visited[i][j]) {
      answer.push(bfs(i, j));
    }
  }
}

answer.sort((a, b) => a - b);

console.log(answer.length);
console.log(answer.join('\n'));
