function solution(citations) {
    citations.sort((a, b) => b - a);
    
    for (let i = 0; i < citations.length; i++) {
        if (citations[i] >= i + 1) {
            continue;
        }
        
        return i;
    }
    
    // 끝까지 걸러지는 논문이 없다는 건 “모든 논문이 자기 순번만큼 인용”되었다는 의미이며, 따라서 논문 개수(전체 길이)만큼이 그대로 H-Index가 된다.
    return citations.length;
}

// *정리하자면,
// (i+1)은 ‘현재 논문이 이 이상 인용되었음을 기대하는 값’
// 그리고 ‘현재 i + 1이상 인용된 논문의 수’ 를 나타낸다.
// 첫번째 논문(6)은 i + 1이 1이기에 인용횟수를 만족하고, 1편이 1의 인용횟수를 만족함을 나타낸다. 즉, 1이 h후보가 된다. 다음 i + 1이 h가 될 수도 있으므로 다음 요소로 넘어간다.

// 두번째 논문(5)은 i + 1이 2이기에 인용횟수를 만족하고, 2편이 2의 인용횟수를 만족함을 나타낸다. 즉, 2가 h후보가 된다. 다음 i + 1이 h가 될 수도 있으므로 다음 요소로 넘어간다.

// 세번째 논문(3)은 i + 1이 3이기에 인용횟수를 만족하고, 3편이 3의 인용횟수를 만족함을 나타낸다. 즉, 3이 h후보가 된다. 다음 i + 1이 h가 될 수도 있으므로 다음 요소로 넘어간다.

// 네번째 논문(1)은 i + 1이 4이기에 인용횟수를 만족하지 않는다. 일단 이 네번째 논문이 만족하지 않는게 확실하므로 4편이 4의 인용 횟수를 만족할 일은 없다. 따라서, 이전 h후보 중 가장 큰 3이 정답이 된다.


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