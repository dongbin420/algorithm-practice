const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(line => line.replace(/\r/g, ''));

const T = Number(input.shift());
const answer = [];

for (let i = 0; i < T; i++) {
  const [M, N, K] = input.shift().split(' ').map(Number);
  const testArr = input.splice(0, K);
  const editedTestArr = testArr.map((coord) => coord.split(' ').map(Number));
  
  const map = Array.from(Array(M), () => Array(N).fill(0));
  const visited = Array.from(Array(M), () => Array(N).fill(false));

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  let wormCnt = 0;

  for (let j = 0; j < K; j++) {
    map[editedTestArr[j][0]][editedTestArr[j][1]] = 1;
  }

  const bfs = (startX, startY) => {
    const queue = [[startX, startY]];
    visited[startX][startY] = true;

    while (queue.length !== 0) {
      const [x, y] = queue.shift();

      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx >= 0 && nx < M && ny >= 0 && ny < N && map[nx][ny] === 1 && !visited[nx][ny]) {
          visited[nx][ny] = true;
          queue.push([nx, ny]);
        }
      }
    }
  }

  for (let j = 0; j < M; j++) {
    for (let k = 0; k < N; k++) {
      if (map[j][k] === 1 && !visited[j][k]) {
        bfs(j, k);
        wormCnt++;
      }
    }
  }

  answer.push(wormCnt);
}

console.log(answer.join('\n'));