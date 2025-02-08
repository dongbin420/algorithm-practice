// 다른 방식 (효율성을 개선한 방식)(일반적인 스택/큐 방식(여기선 큐)을 이용한)
function solution(progresses, speeds) {
    const days = [];
    
    for (let i = 0; i < progresses.length; i++) {
        const day = Math.ceil((100 - progresses[i]) / speeds[i]);
        days.push(day);
    }
    
    const answer = [];
    let standard = days[0];
    let cnt = 1;
    
    for (let i = 1; i < days.length; i++) {
        if (days[i] > standard) {
            answer.push(cnt);
            standard = days[i];
            cnt = 1;
        } else {
            cnt++;
        }
    }
    
    answer.push(cnt);
    
    return answer;
}

// 처음 푼 방식(조금 비효율적일 수 있음)
// function solution(progresses, speeds) {
//     const answer = [];
    
//     while (progresses.length > 0) {
//         let completedCnt = 0;
        
//         for (let i = 0; i < progresses.length; i++) {
//             if (progresses[i] < 100) {
//                 progresses[i] += speeds[i];
//             }
            
//             if (progresses[0] >= 100) {
//                 completedCnt++;
//                 progresses.shift();
//                 speeds.shift();
//                 i--;
//             }
//         }
        
//         if (completedCnt > 0) {
//             answer.push(completedCnt);
//         }
        
//     }
    
//     return answer;
// }