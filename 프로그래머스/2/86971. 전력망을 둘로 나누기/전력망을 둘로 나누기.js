function solution(n, wires) {
    const tree = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
    let diffs = [];
    
    // 트리 만들기
    for (let i = 0; i < wires.length; i++) {
        const [start, end] = wires[i];
        tree[start][end] = 1;
        tree[end][start] = 1;
    }
    
    // 전선 한 개씩 끊기
    for (let j = 0; j < wires.length; j++) {
        const [start, end] = wires[j];
        tree[start][end] = 0;
        tree[end][start] = 0;
        
        // 두 개로 나뉜 전력망의 송전탑 개수 각각 구하고, 차이 구하기
        // 두 개로 나뉜 트리를 각각 bfs로 순회하면서 전선의 개수를 구하고 차이 구하기
        const visited = new Array(n + 1).fill(false);
        
        const bfs = (startNode) => {
            let lineCnt = 0;
            const queue = [startNode];
            visited[startNode] = true;
            
            while (queue.length > 0) {
                const node = queue.shift();
                
                for (let i = 1; i < n + 1; i++) {
                    if (!visited[i] && tree[node][i] === 1) {
                        visited[i] = true;
                        queue.push(i);
                        lineCnt++;
                    }
                }
            }
            
            return lineCnt;
        }
        
        const lines = []
        
        for (let i = 1; i < n + 1; i++) {
            if (!visited[i]) {
                lines.push(bfs(i));
            }
        }
        
        diffs.push(Math.abs(lines[0] - lines[1]));
        
        // 원상 복구
        tree[start][end] = 1;
        tree[end][start] = 1;
    }
    
    return Math.min(...diffs);
}