function solution(tickets) {
    const graph = {};
    
    tickets.forEach(([from, to]) => {
        if (!graph[from]) {
            graph[from] = [];
        }
        graph[from].push(to);
    })
    
    for (const key of Object.keys(graph)) {
        graph[key].sort();
    }
    
    const route = [];
    const stack = ['ICN'];
    
    const dfs = () => {
        while (stack.length > 0) {
            const top = stack[stack.length - 1];
            
            // 현재 공항에서 출발하는 항공권이 있는 경우
            if (graph[top] && graph[top].length > 0) {
                // 알파벳 순서가 앞서는 공항으로 이동
                stack.push(graph[top].shift());
            } else {
                // 더 이상 갈 곳이 없으면 경로에 추가
                route.push(stack.pop());
            }
        }
    }
    
    dfs();
    
    return route.reverse();
}


// 첫 풀이 도전(틀린 코드)
// function solution(tickets) {
//     const graph = {};
    
//     for (let i = 0; i < tickets.length; i++) {
//         if (graph[tickets[i][0]]) {
//             graph[tickets[i][0]].push(tickets[i][1]);
//         } else {
//             graph[tickets[i][0]] = [tickets[i][1]];
//         }
//     }
    
//     for (const key of Object.keys(graph)) {
//         graph[key].sort();
//     }
    
//     console.log(graph)
    
//     const dfs = (idx) => {
//         const route = [];
        
//         const stack = [graph['ICN'][idx]];
//         route.push('ICN');
//         route.push(graph['ICN'][idx]);
    
//         while (stack.length > 0) {
//             const city = stack.pop();
            
//             if (graph.hasOwnProperty(city)) {
//                 for (let i = 0; i < graph[city].length; i++) {
//                     stack.push(graph[city][i]);
//                     route.push(graph[city][i]);
//                 }
//             } 
//         }
        
//         return route;
//     }
    
//     for (let i = 0; i < graph['ICN'].length; i++) {
//         if (dfs(i).length === Object.keys(graph).length) {
//             return dfs(i);
//         }
//     }
// }