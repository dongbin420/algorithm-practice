const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(line => line.replace(/\r/g, ''));

const [N, M] = input.shift().split(' ').map(Number);

const maze = input.map(row => row.split('').map(Number));
const visited = Array.from(Array(N), () => Array(M).fill(false));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function bfs() {
  const queue = [[0, 0]];

  while (queue.length > 0) {
    const [x, y] = queue.shift();

    if (!visited[x][y]) {
      visited[x][y] = true;

      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
  
        if (nx >= 0 && nx < N && ny >= 0 && ny < M && maze[nx][ny] === 1 && !visited[nx][ny]) {
          maze[nx][ny] = maze[x][y] + 1;
          queue.push([nx, ny]);
        }
      }
    }
  }
}

bfs();

console.log(maze[N - 1][M - 1]);