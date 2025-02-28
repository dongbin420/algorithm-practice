// 문제를 푸는 모든 과정을 노션 알고리즘 -> 이분탐색 문서에 작성해놓음
function solution(n, times) {
  let left = 1;
  let right = n * Math.max(...times);

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let possiblePeople = 0;

    times.forEach((time) => {
      possiblePeople += Math.floor(mid / time);
    });

    if (possiblePeople >= n) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

// 오래 전에 풀었던 방식
// function solution(n, times) {
    
//     // max_1 = 심사관 중에 가장 오래 걸리는 시간
//     // 오름 차순 정렬
//     times.sort((a, b) => a - b);
    
//     let minTime = times[0];
//     let maxTime = times[times.length - 1] * n;
    
//     let answer = maxTime;
    
//     while(minTime <= maxTime) {
//         let midTime = Math.floor((minTime+maxTime)/2);
        
//         let count = 0;
        
//         for (let time of times) {
//             count += Math.floor(midTime/time);
//         }
        
//         if (count >= n) {
            
//             answer = midTime;
//             // 조건을 충족한 경우
//             maxTime = midTime - 1;
//         } else {
//             // 조건을 충족 하지 못한 경우
//             minTime = midTime + 1;
//         }
//     }
    
//     return answer;
// }