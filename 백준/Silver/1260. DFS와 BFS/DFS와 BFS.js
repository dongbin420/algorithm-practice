const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(line => line.replace(/\r/g, ''));

const [numOfVertex, NumOfEdge, startVertex] = input.shift().split(' ').map(Number);
const graph = Array.from(Array(numOfVertex + 1), () => Array(numOfVertex + 1).fill(0));

for (let i = 0; i < NumOfEdge; i++) {
  const [vertex1, vertex2] = input[i].split(' ').map(Number);
  graph[vertex1][vertex2] = graph[vertex2][vertex1] = 1;
}

const dfsVisited = new Array(numOfVertex + 1).fill(false);
const bfsVisited = new Array(numOfVertex + 1).fill(false);

const dfsPrintArr = [];
const bfsPrintArr = [];

function dfs(vertex) {
  // 스택을 이용한 방법
  // const stack = [vertex];
  
  // while (stack.length !== 0) {
  //   vertex = stack.pop();
  //   if (dfsVisited[vertex]) continue;
  //   dfsVisited[vertex] = true;
  //   dfsPrintArr.push(vertex);

  //   for (let i = numOfVertex; i >= 1; i--) {
  //     if (graph[vertex][i] === 1 && dfsVisited[i] === false) {
  //       stack.push(i);
  //     }
  //   }
  // }

  // 재귀를 이용한 방법
  dfsVisited[vertex] = true;
  dfsPrintArr.push(vertex);

  for (let i = 1; i <= numOfVertex; i++) {
    if (graph[vertex][i] === 1 && dfsVisited[i] === false) {
      dfs(i);
    }
  }
}

function bfs(vertex) {
  const queue = [vertex];
  bfsVisited[vertex] = true;

  while (queue.length !== 0) {
    vertex = queue.shift();
    bfsPrintArr.push(vertex);

    for (let i = 1; i <= numOfVertex; i++) {
      if (graph[vertex][i] === 1 && bfsVisited[i] === false) {
        queue.push(i);
        bfsVisited[i] = true;
      }
    }
  }
}

dfs(startVertex);
bfs(startVertex);

console.log(dfsPrintArr.join(' '));
console.log(bfsPrintArr.join(' '));