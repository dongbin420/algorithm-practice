// (3) 서브트리 크기를 한 번에 계산하는 방법
// 간선을 끊을때마다 dfs를 하는게 아니라, 한 번의 bfs로 모든 서브 트리의 크기를 미리 계산해서 사용하는 방식
// 단 한번의 dfs로, O(n)의 시간복잡도를 가져 (1) 방법보다 효율적 
function solution(n, wires) {
    const graph = Array.from({ length: n + 1 }, () => []);
    
    for (const [v1, v2] of wires) {
        graph[v1].push(v2);
        graph[v2].push(v1);
    }
    
    const subtreeSize = Array(n + 1).fill(0);
    const visited = Array(n + 1).fill(false);
    
    const dfs = (node) => {
        visited[node] = true;
        subtreeSize[node] = 1;
        
        for (const neighbor of graph[node]) {
            if (!visited[neighbor]) {
                subtreeSize[node] += dfs(neighbor);
            }
        }
        
        return subtreeSize[node];
    }

    dfs(1);
    
    let minDiff = Infinity;
    
    for (const [v1, v2] of wires) {
        const size1 = subtreeSize[v1] < subtreeSize[v2] ? subtreeSize[v1] : subtreeSize[v2];
        const size2 = n - size1;
        const diff = Math.abs(size1 - size2);
        
        minDiff = Math.min(minDiff, diff);
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