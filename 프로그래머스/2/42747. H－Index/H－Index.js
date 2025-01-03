function solution(citations) {
    citations.sort((a, b) => b - a);
    
    for (let i = 0; i < citations.length; i++) {
        // if (citations[i] <= i + 1) {
        //     return i + 1;
        // }
        
        if (citations[i] >= i + 1) {
            continue;
        }
        
        return i;
    }
    
    return citations.length;
}


// 처음에 푼 방식(아마도, 시간 복잡도에서 만족하지 않는 것으로 보임)
// function solution(citations) {
//     citations.sort((a, b) => b - a);
    
//     for (let i = 0; i < citations.length; i++) {
//         const h = citations[i];
//         let cnt = 0;
        
//         for (let j = 0; j < citations.length; j++) {
//             if (citations[j] >= h) {
//                 cnt++;
//             }
//         }
        
//         if (cnt >= h) {
//             return h;
//         }
//     }
// }