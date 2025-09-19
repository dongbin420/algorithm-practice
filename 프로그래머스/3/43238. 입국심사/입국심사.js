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
// 위 문제 간단 설명
// 1. left <= right인 이유는 left와 right는 최소 시간의 후보가 되는 범위이고, 둘 이 같더라도 여전히 후보 시간을 계산할 수 있으므로, 같을 때 까지도 검사하는 것.
// 2. possiblePeople >= n인 이유는 가능한 심사 인원이 실제 해야할 심사 인원인 n과 같더라도, 여전히 더 적은 시간 동안 해당 인원을 심사할 수 있는 가능성이 있으므로, 계속해서 검사하는 것
// 3. 마지막에 left가 정답이 되는 이유는, 정석적인 이유는 잘 모르겠지만, 입력 예제를 통해 설명할 수 있다. 위 이분탐색 코드의 반복 과정을 거치다보면 최소 시간이 27분이면 n명을 심사하기에 모자르다는 것을 판단한다. 따라서 left가 28이 된 시점에 이 left는 이분 탐색의 반복 과정을 만족하는 left이고 27분은 불가능하니 left가 답을 보장하는 것. 쉽게 말해, '이분 탐색의 절차를 명확하게 작성했기에, left가 최소를 보장하게 되었다.' 정도로 이해하는게 현재로서는 이해 가능한 범위라고 판단됨.




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