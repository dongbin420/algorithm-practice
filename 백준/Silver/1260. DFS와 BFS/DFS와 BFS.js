const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(line => line.replace(/\r/g, ''));

const [numOfVertex, NumOfEdge, startVertex] = input[0].split(' ').map(Number);
const graph = Array.from(Array(numOfVertex + 1), () => []);

for (let i = 1; i <= NumOfEdge; i++) {
  const [from, to] = input[i].split(' ').map(Number);
  graph[from].push(to);
  graph[to].push(from);
}

graph.forEach((edge) => edge.sort((a, b) => a - b));

const dfsVisited = Array(numOfVertex + 1).fill(false);
const bfsVisited = Array(numOfVertex + 1).fill(false);
const dfsResult = [];
const bfsResult = [];

// 재귀
// const dfs = (vertex) => {
//   dfsVisited[vertex] = true;
//   dfsResult.push(vertex);

//   for (let i = 0; i < graph[vertex].length; i++) {
//     const adj = graph[vertex][i];

//     if (!dfsVisited[adj]) {
//       dfs(adj);
//     }
//   }
// }

//스택
const dfs = (vertex) => {
  const stack = [vertex];

  while (stack.length !== 0) {
    const vtx = stack.pop();

    if (!dfsVisited[vtx]) {
      dfsVisited[vtx] = true;
      dfsResult.push(vtx);

      for (let i = graph[vtx].length - 1; i >= 0; i--) {
        const adj = graph[vtx][i];

        if (!dfsVisited[adj]) {
          stack.push(adj);
        }
      }
    }
  }
}

const bfs = (vertex) => {
  const queue = [vertex];
  bfsVisited[vertex] = true;

  while (queue.length !== 0) {
    const vtx = queue.shift();
    bfsResult.push(vtx);

    for (let i = 0; i < graph[vtx].length; i++) {
      const adj = graph[vtx][i];

      if (!bfsVisited[adj]) {
        bfsVisited[adj] = true;
        queue.push(adj);
      }
    }
  }
}

dfs(startVertex);
bfs(startVertex);

console.log(dfsResult.join(' '));
console.log(bfsResult.join(' '));