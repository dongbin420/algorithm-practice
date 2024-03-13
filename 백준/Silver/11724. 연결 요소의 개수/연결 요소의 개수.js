const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(line => line.replace(/\r/g, ''));

const editedInput = input.map(ele => ele.split(' ').map(Number));
const [N, M] = editedInput[0];

const graph = Array.from(Array(N + 1), () => Array(N + 1).fill(0));
const visit = Array(N + 1).fill(false);

for (let i = 1; i <= M; i++) {
  graph[editedInput[i][0]][editedInput[i][1]] = 1;
  graph[editedInput[i][1]][editedInput[i][0]] = 1;
}

const DFS = (start) => {
  const stack = [start];

  while (stack.length !== 0) {
    const target = stack.pop();

    if (!visit[target]) {
      visit[target] = true;
  
      for (let i = 1; i <= N; i++) {
        if (graph[target][i] === 1 && !visit[i]) {
          stack.push(i);
        }
      }
    }
  }
}

let cnt = 0;

for (let i = 1; i <= N; i++) {
  if (!visit[i]) {
    DFS(i);

    cnt++;
  }
}

console.log(cnt);