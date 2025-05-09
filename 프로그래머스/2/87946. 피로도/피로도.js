function solution(k, dungeons) {
    const visited = Array(dungeons.length).fill(false);
    let maxCnt = 0;
    
    const dfs = (fatigue, cnt) => {
        let found = false;
        
        for (let i = 0; i < dungeons.length; i++) {
            const [required, consume] = dungeons[i];
            
            if (!visited[i] && fatigue >= required) {
                found = true;
                visited[i] = true;
                dfs(fatigue - consume, cnt + 1);
                visited[i] = false;
            }
        }
        
        if (!found) {
            maxCnt = Math.max(maxCnt, cnt)
        }
    }
    
    dfs(k, 0);
    return maxCnt;
}
























// // 순열 방식
// function solution(k, dungeons) {
//     const indices = dungeons.map((_, i) => i);
//     let maxCnt = 0;
    
//     const getPermutations = (arr) => {
//         const result = [];
        
//         const permute = (temp, used) => {
//             if (temp.length === arr.length) {
//                 // temp를 그대로 push 하면 이 temp를 참조하는 모든 값이 참조를 공유하기 때문에, 비정상적으로 작동할 위험이 있어, 복사본으로 push
//                 result.push([...temp]);
                
//                 return;
//             }
            
//             for (let i = 0; i < arr.length; i++) {
//                 if (used[i]) continue;
//                 used[i] = true;
//                 temp.push(arr[i]);
//                 permute(temp, used);
//                 temp.pop();
//                 used[i] = false;
//             }
//         }
        
//         permute([], Array(arr.length).fill(false));
        
//         return result;
//     }
    
//     const perms = getPermutations(indices);
    
//     for (const perm of perms) {
//         let fatigue = k;
//         let cnt = 0;
        
//         for (const idx of perm) {
//             const [required, consume] = dungeons[idx];
            
//             if (fatigue >= required) {
//                 fatigue -= consume;
//                 cnt++;
//             } else {
//                 break;
//             }
//         }
        
//         if (cnt > maxCnt) {
//             maxCnt = cnt;
//         }
//     }
    
//     return maxCnt;
// }

// // // dfs(백트래킹 방식)
// // function solution(k, dungeons) {
// //     let maxCnt = 0;
// //     const visited = Array(dungeons.length).fill(false);
    
// //     const dfs = (fatigue, cnt) => {
// //         // 이 found는 이 dfs에서 적절한 시점에 cnt를 추출하는 데 사용됨.
// //         // found가 false인 경우(더 이상 갈 던전x)의 재귀 함수 실행은 그 시점까지 cnt를 추출해서 maxCnt와 비교하게 해주고, true인 경우는 추출 하면 안됨 
// //         // 사실, 단순 최댓값을 찾는 문제이므로, found 필요없이 매번 호출마다 cnt를 maxCnt와 비교해도 된다. 결국에는 최댓값으로 수렴되기 때문. 하지만, 더 이상 방문할 수 없을때만 maxCnt를 비교한다 라는 의미를 강조하기 위해 이 found를 쓰면 좋음.
// //         let found = false;
        
// //         for (let i = 0; i < dungeons.length; i++) {
// //             const [required, consume] = dungeons[i];
            
// //             if (!visited[i] && fatigue >= required) {
// //                 found = true;
// //                 visited[i] = true;
// //                 dfs(fatigue - consume, cnt + 1);
// //                 visited[i] = false;
// //             }
// //         }
        
// //         if (!found) {
// //             maxCnt = Math.max(maxCnt, cnt);
// //         }
// //     }
    
// //     dfs(k, 0);
// //     return maxCnt;
// // }

// // 메인 아이디어: 던전을 방문하는 순서의 모든 경우를 다 검사해보고 제일 많이 방문하는거 고르면 되는거 아니야?
// // 구체화: 1 -> 2 -> 3, 1 -> 3 -> 2, 2 -> 1 -> 3 등 여러 순서의 경우를 생각하고, 피로도와 함께 계산하고, 몇 개씩 방문했는지 검사 후, 최대 값 출력
// // 문제: 모든 순서의 경우를 코드로 어떻게 나타낼지?
// // 방법1: 순열
// // -> 던전 인덱스로 이루어진 모든 순서(경우)배열을 모으고, 이를 기반으로 던전 방문 
// // 방법2: dfs + 백트래킹
// // -> 방문 cnt를 세면서 순서대로 방문하면서 방문이 가능할때까지 방문하고 더 이상 방문이 불가능한 지점에서 방문을 멈추고 cnt를 최대 cnt와 비교하는 방식(재귀 이용)(재귀가 끝난 지점(이전 방문지에서 더 이상 다른 곳으로 방문 불가)에서 방문여부를 초기화 시키면서 백트래킹을 활용함)
// // 1 -> 2 -> 3방문 불가, cnt 추출(1, 2 던전에 대해서만) -> 2 방문여부 해제 -> 3 방문(cnt 2) -> 2방문 가능, cnt 추출(3) -> 3방문 여부 해제(이 시점에서 1 -> 2, 1 -> 3 -> 2 방문을 마치고 다시 2던전 방문부터 이전과 같은 방식으로 계속 진행)  