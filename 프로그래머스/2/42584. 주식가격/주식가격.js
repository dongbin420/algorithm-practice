function solution(prices) {
  const length = prices.length;
  const times = Array(length).fill(0);
  const indexStack = [];

  for (let i = 0; i < length; i++) {
    while (indexStack.length > 0 && prices[i] < prices[indexStack[indexStack.length - 1]]) {
      const idx = indexStack.pop();
      times[idx] = i - idx;
    }

    indexStack.push(i);
  }

  while (indexStack.length > 0) {
    const idx = indexStack.pop();
    times[idx] = (length - 1) - idx;
  }

  return times;
}

// 위의 방식이 원래 의도(스택 활용)에 더 맞는 방식 인덱스 변화가 초 변화를 나타낼 수 있음을 활용한 것. 각 가격의 인덱스를 스택에 저장하면서 현재 가격이 이전 가격보다 낮은 경우에만 스택에서 해당 인덱스를 꺼내고 인덱스 비교를 통해 그 동안 유지된 시간을 계산함. 이 과정이 끝난 후에도 스택에 남아 있는 인덱스들은 가격 하락이 발생하지 않았다는 의미이므로, 단순히 최대 인덱스 - 자신의 인덱스로 가격이 하락하지 않은 시간을 계산하는 방식
// 이 방식도 중첩 반복문을 쓰고있긴 하지만, 결국 for 내부 while문은 순회를 하면서도 단 한 번 가격이 떨어졌을때만 내부 코드를 실행하므로 시간복잡도는 바깥 for문 한 번에 대해 O(N^2)이라고 보는게 맞다.





// 처음 푼 방식, 브루스포스 방식이라고 볼 수 있음. 문제가 통과가 되기는 하지만 최악의 경우 O(N^2)의 시간복잡도를 가질 수 있음
// function solution(prices) {
//     const times = [];
    
//     for (let i = 0; i < prices.length; i++) {
//         const currentPrice = prices[i];
//         let sec = 0;
        
//         for (let j = i + 1; j < prices.length; j++) {
//             if (currentPrice <= prices[j]) {
//                 sec++;
//             } else {
//                 sec++;
                
//                 break;
//             }
//         }
        
//         times.push(sec);
//     }
    
//     return times;
// }