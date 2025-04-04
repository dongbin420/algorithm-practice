// 백트래킹 방식
function solution(tickets) {
  const graph = {};

  // 티켓을 기반으로, 각 출발지에 대해서 도착지들을 모은 배열을 만든 객체 그래프
  tickets.forEach(([from, to]) => {
    if (!graph[from]) {
      graph[from] = [];
    }
    graph[from].push(to);
  })

  // 그래프에서, 각 출발지들의 도착지들을 알파벳 순으로 정렬(알파벳 순으로 빠른 도착지를 먼저 가야하니까)
  for (const key of Object.keys(graph)) {
    graph[key].sort();
  }
    // 도착지는 있지만 출발지로는 단 한 번도 등장하지 않은 공항을 빈 배열로 할당해서, 그래프 탐색 시, undefined 체크 방지
    for (const [from, to] of tickets) {
  if (!graph[to]) graph[to] = [];
}

    const route = ["ICN"];
    const totalTickets = tickets.length;
    
    function dfs(currentAirport, usedCount) {
  if (usedCount === totalTickets) {
    return true; // 모든 티켓 사용 완료 -> 경로 완성
  }

  const destinations = graph[currentAirport];
  for (let i = 0; i < destinations.length; i++) {
    const nextAirport = destinations[i];

    // 현재 경로에서 다음 공항 방문
    destinations.splice(i, 1);   // 사용한 티켓 제거
    route.push(nextAirport);

    // 다음 단계로 재귀 호출
    if (dfs(nextAirport, usedCount + 1)) {
      return true; // 정답 찾으면(모든 티켓 사용 완료) 더 이상 탐색 불필요
    }

    // 백트래킹 (원상 복구)
    // 재귀 호출로 인해, 도착지가 없을때 까지 탐색한 후, 모든 티켓을 사용하지 않은 상황을 확인하고 재귀적으로 이전에 넣은 도착지들을 하나하나 지우면서 원상복귀 시키는 과정
    route.pop();
    destinations.splice(i, 0, nextAirport);
  }

  return false; // 이 경로로는 모든 티켓 사용 불가능
}

  dfs("ICN", 0);
    
  return route;
}
//+splice 사용 대신, visited 배열을 사용하는게 효율성면에서 더 좋을 수도
//+스택 방식으로도 구현해보는 시도


// 오일러 경로
// function solution(tickets) {
//   const graph = {};

//   // 티켓을 기반으로, 각 출발지에 대해서 도착지들을 모은 배열을 만든 객체 그래프
//   tickets.forEach(([from, to]) => {
//     if (!graph[from]) {
//       graph[from] = [];
//     }
//     graph[from].push(to);
//   })

//   console.log(graph);

//   // 그래프에서, 각 출발지들의 도착지들을 알파벳 순으로 정렬(알파벳 순으로 빠른 도착지를 먼저 가야하니까)
//   for (const key of Object.keys(graph)) {
//     graph[key].sort();
//   }

//   console.log(graph);

//   const route = [];
//   const stack = ['ICN'];

//   const dfs = () => {
//     while (stack.length > 0) {
//       // 현재 출발하는 공항
//       const top = stack[stack.length - 1];
//       // 현재 출발할 공항이 도착지가 있는지 여부 확인
//       if (graph[top] && graph[top].length > 0) {
//         // 현재 출발한 공항의 도착지 중 알파벳 순이 가장 빠른 공항으로 이동
//         stack.push(graph[top].shift());
//       } else {
//         // 현재 출발할 공항이 도착지가 없으면, 스택의 가장 마지막 요소를 경로에 추가
//         // 도착지가 없는 시점은, 더 이상 갈 곳이 없다는 뜻으로, 가장 마지막에 도착해야 하는 목적지가 route에 가장 앞으로 정렬될 것임.(이전에 방문한 도시들은 이미 스택에 추가가 되어있어 route에서는 마지막 도착지 뒤에 정렬 됨.)
//         route.push(stack.pop());
//       }
//     }
//   }

//   dfs();
//   // dfs의 else에서 마지막 목적지가 가장 앞에 정렬되니 마지막에 정답을 위해 재정렬
//   return route.reverse();
// }

// 이 문제를 백트래킹이라고 볼 수 있는가?
// 백트래킹의 핵심은 dfs를 기반으로 경로를 탐색하다가, 특정 경로에서 더 이상 유효한 경로가 아님을 파악했을 때 해당 경로를 그만 탐색하고, 다른 경로를 다시 탐색하는 방식. 다만 위 문제에서는 이미 알파벳 순으로 탐색을 하면 무조건 유효한 경로가 보장된다는 조건이 있으므로, 특정 경로를 더 이상 더 탐색할 수 없을때, 다른 경로를 더 파악할 필요가 없고 그 시점의 거쳐온 경로들을 답으로 출력하면 끝.
// 즉, 전통적인 백트래킹(dfs로 경로를 탐색하다가, 유효하지 않은 경로를 탐색하게 되는 경우 탐색을 멈추고 다른 경로로 다시 탐색을 시작하는 방식)과는 다르다고 생각할 수 있음. 단지, 백트래킹의 기본 개념에 기반한 탐색 정도로 이해. 엄밀히 말하면 단순 dfs에 가깝다.('알파벳 정렬로 최적화하는 dfs')

// (이후에 알게된 사실 -> 위 내용보다 더 중요)
// 위 코드를 처음 이해했을땐, '알파벳 순으로 가장 빠른' 방식을 선택하면 무조건, 답이 나온다로 이해했는데, 막상 생각해보니 알파벳 순으로 가장 빠른 방식이 답을 무조건적으로 보장하는게 맞지 않다고 판단했고, 위의 코드가 틀렸다고 생각했다. 하지만, 코드를 다시 세세하게 분석한 결과 해당 코드는 특정 시점에서 도착지가 끊겼다고 해서 탐색을 끝내고 그대로 답을 도출하는게 아니라, 끊긴 지점 까지만 최종 경로에 확정하고(route에 삽입) 나머지 옳은 경로를 다시 stack에 넣고 나머지 경로를 이후에 추가해서 옳은 답을 내는 방향까지 도출하고 있다. 

// 즉, 두 가지 방법으로 풀 수 있는 것으로 보임
// 1. 해당 경로가 모든 티켓을 사용하지 않고 끊겼을 경우에, 다른 경로를 탐색하는 백트래킹
// 2. 해당 경로가 모든 티켓을 사용하지 않고 끊겼을 경우에 이때까지의 경로만 route(정답)에 경로를 추가하고, 이어서 탐색을 추가적으로 진행하고 route에 경로를 더해서 바로 답을 내는 방식 (확실하진 않지만, Hierholzer 알고리즘? 이라고 하는 것 같다.)



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