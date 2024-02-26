const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(line => line.replace(/\r/g, ''));

const [computer, connected] = input.splice(0, 2).map(Number);
const graph = Array.from(Array(computer + 1), () => []);
const bfsVisited = Array(computer + 1).fill(false);

for (let i = 0; i < connected; i++) {
  const [from, to] = input[i].split(' ').map(Number);

  graph[from].push(to);
  graph[to].push(from);
}

const bfs = function(start) {
  const queue = [start];

  while (queue.length !== 0) {
    const node = queue.shift();

    if (!bfsVisited[node]) {
      bfsVisited[node] = true;
  
      for (let i = 0; i < graph[node].length; i++) {
        const adj = graph[node][i];
        queue.push(adj);
      }
    }
  }
}

bfs(1);

const answer = bfsVisited.filter(node => node).length - 1;
console.log(answer);