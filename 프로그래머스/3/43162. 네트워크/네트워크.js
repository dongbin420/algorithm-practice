// dfs(스택 방식)
function solution(n, computers) {
    const visited = new Array(n).fill(false);
    let networks = 0;
    
    const dfs = (startNode) => {
        const stack = [startNode];
        visited[startNode] = true;
        
        while (stack.length > 0) {
            const node = stack.pop();
            
            for (let i = 0; i < n; i++) {
                if (computers[node][i] === 1 && !visited[i]) {
                    visited[i] = true;
                    stack.push(i);
                }
            }
        }
    }
    
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            networks++;
            dfs(i);
        }
    }
    
    return networks
}