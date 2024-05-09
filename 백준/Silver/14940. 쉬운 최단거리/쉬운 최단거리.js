const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((line) => line.replace(/\r/g, ''));

const [n, m] = input.shift().split(' ').map(Number);

const graph = Array.from(input, (arr) => arr.split(' ').map(Number));
const visited = Array.from(Array(n), () => Array(m).fill(false));
let targetIdx;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (graph[i][j] === 2) {
      targetIdx = [i, j];

      break;
    }
  }
}

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const [targetX, targetY] = targetIdx;
graph[targetX][targetY] = 0;
visited[targetX][targetY] = true;
const queue = [targetIdx];

while (queue.length !== 0) {
  const [x, y] = queue.shift();

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx >= 0 && nx < n && ny >= 0 && ny < m && !visited[nx][ny] && graph[nx][ny] === 1) {
      graph[nx][ny] = graph[x][y] + 1;
      queue.push([nx, ny]);
      visited[nx][ny] = true;
    }
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (graph[i][j] === 1 && !visited[i][j]) {
      graph[i][j] = -1;
    }
  }
}

console.log(graph.map((row) => row.join(' ')).join('\n'));
