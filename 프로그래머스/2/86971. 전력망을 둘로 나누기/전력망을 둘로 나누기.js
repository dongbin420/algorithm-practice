// (3) 서브트리 크기를 한 번에 계산하는 방법
// 간선을 끊을때마다 dfs를 하는게 아니라, 한 번의 dfs로 모든 서브 트리의 크기를 미리 계산해서 사용하는 방식
// 단 한번의 dfs로, O(n)의 시간복잡도를 가져 (1) 방법보다 효율적 
function solution(n, wires) {
  // 결과: [[], [], [], []] 형태로, n + 1 길이의 배열 생성
  const tree = Array.from({ length: n + 1 }, () => []);

  for (const [v1, v2] of wires) {
    tree[v1].push(v2);
    tree[v2].push(v1);
  }

  // 각 송전탑을 루트로 하는 서브트리의 송전탑 개수
  const subtreeSize = Array(n + 1).fill(0);
  // dfs를 위한 방문 배열
  const visited = Array(n + 1).fill(false);

  // dfs로 트리를 탐색하면서, 모든 송전탑 각각을 루트로 하는 서브트리의 개수를 각각 구함 (ex 1의 서브트리 개수 4, 2는 3, 3은 2, 1은 1)
  const dfs = (node) => {
    visited[node] = true;
    subtreeSize[node] = 1;

    for (const neighbor of tree[node]) {
      if (!visited[neighbor]) {
        subtreeSize[node] += dfs(neighbor);
      }
    }

    return subtreeSize[node];
  }

  dfs(1);

  let minDiff = Infinity;

  // 트리에서 전선을 한개씩 끊어보기
  for (const [v1, v2] of wires) {
    // 두 송전탑 사이를 끊었을 때, 둘 중 서브트리 개수가 적은 송전탑의 서브트리만 옳은 전력망이 될 수 있음
    // 예를 들어 v1 = 1, v2 = 2일 때, subtreeSize[v1]은 4, subtreeSize[v2]는 3이고, 1과 2사이를 끊으면 subtreeSize[v2]는 옳은 한 개의 전력망이 되지만, subtreeSize[v1]은 아님. 
    // 이를 좀 더, 쉽고 명료한 방식으로 설명하면 두 송전탑 사이를 끊었을 때 더 큰 서브트리는
    // 자기자신(부모) + 자식쪽 전부를 나타내 잘린 하나의 전력망보다 더 클 수밖에 없지만, 작은 서브트리는 부모쪽을 포함하지 않기에 하나의 옳은 전력망이 될 수 있는 것.
    const size1 = subtreeSize[v1] < subtreeSize[v2] ? subtreeSize[v1] : subtreeSize[v2];
    const size2 = n - size1;
    minDiff = Math.min(minDiff, Math.abs(size1 - size2));
  }

  return minDiff;
}

// (2) (1) 방식 다시 풀어보기
// function solution(n, wires) {
//     const tree = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
//     const diffs = [];
    
//     for (let i = 0; i < wires.length; i++) {
//         const [start, end] = wires[i];
//         tree[start][end] = 1;
//         tree[end][start] = 1;
//     }
    
//     const bfs = (startNode) => {
//         const visited = Array(n + 1).fill(false);
//         const queue = [startNode];
//         visited[startNode] = true;
//         let cnt = 1;
        
//         while (queue.length > 0) {
//             const node = queue.shift();
            
//             for (let k = 1; k <= n; k++) {
//                 if (!visited[k] && tree[node][k] === 1) {
//                     visited[k] = true;
//                     queue.push(k);
//                     cnt++;
//                 }
//             }
//         }
        
//         return cnt;
//     }
    
//     for (let j = 0; j < wires.length; j++) {
//         const [start, end] = wires[j];
//         tree[start][end] = 0;
//         tree[end][start] = 0;
        
//         const cnt = bfs(start);
//         diffs.push(Math.abs(cnt - (n - cnt)));
        
//         tree[start][end] = 1;
//         tree[end][start] = 1;
//     }
    
//     return Math.min(...diffs);
// }

// (1) 모든 간선을 하나씩 끊어보는 방식
// function solution(n, wires) {
//     const tree = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
//     let diffs = [];
    
//     // 트리 만들기
//     for (let i = 0; i < wires.length; i++) {
//         const [start, end] = wires[i];
//         tree[start][end] = 1;
//         tree[end][start] = 1;
//     }
    
//     // 전선 한 개씩 끊기
//     for (let j = 0; j < wires.length; j++) {
//         const [start, end] = wires[j];
//         tree[start][end] = 0;
//         tree[end][start] = 0;
        
//         // 두 개로 나뉜 전력망의 송전탑 개수 각각 구하고, 차이 구하기
//         // 두 개로 나뉜 트리를 각각 bfs로 순회하면서 송전의 개수를 구하고 차이 구하기
//         const visited = new Array(n + 1).fill(false);
        
//         const bfs = (startNode) => {
//             let cnt = 1;
//             const queue = [startNode];
//             visited[startNode] = true;
            
//             while (queue.length > 0) {
//                 const node = queue.shift();
                
//                 for (let i = 1; i < n + 1; i++) {
//                     if (!visited[i] && tree[node][i] === 1) {
//                         visited[i] = true;
//                         queue.push(i);
//                         cnt++;
//                     }
//                 }
//             }
            
//             return cnt;
//         }
        
//         // 아무데서나 bfs를 한번만 실시하고, 이때 노드의 수를 이용해서 다른 전력망의 노드 수를 구해서 차이를 구하는 간단한 방식
//         const cnt = bfs(start)
//         diffs.push(Math.abs(cnt - (n - cnt)));
        
//         // 원상 복구
//         tree[start][end] = 1;
//         tree[end][start] = 1;
//     }
    
//     return Math.min(...diffs);
// }