function solution(people, limit) {
  people.sort((a, b) => a - b);
  let boat = 0;
  let leftIdx = 0;
  let rightIdx = people.length - 1;

  // 태워 보낼 사람이 한 명만 남았을 때도 보트를 태워 보내기 위해 두 인덱스가 같아지는 경우까지 진행해야한다.
  while (leftIdx <= rightIdx) {
    if (people[leftIdx] + people[rightIdx] <= limit) {
      leftIdx++;
    }

    rightIdx--;
    boat++;
  }

  return boat;
}

// 투포인터 방식 머리속으로 그리는 법
// 배열에서 양쪽 끝의 인덱스가 시도를 계속하면서
// 안쪽으로 하나씩 옮겨지면서 조정되는 모습을 떠올리면 된다. 

// 아이디어 정리

// 무게가 가장 가벼운 사람과 무게가 가장 큰 사람의 합이 제한을 넘지 않은 경우 보트를 태워 보내고, 그렇지 않은 경우 혼자보내는(가장 가벼운 사람과도 함께 타지 못했으니, 두번째로 가벼운 사람이랑은 당연히 못가므로, 혼자 보내야함) 시도를 반복하면서 왼쪽 끝에서 시작한 인덱스와 오른쪽 끝에서 시작한 인덱스가 비교했을때 왼쪽 인덱스가 오른쪽 인덱스보다 커지기 전까지 이를 반복한다. 그리고 나온 보트의 수가 최솟값이 된다.

// 이 문제의 핵심 아이디어는 가장 가벼운 사람과 무게가 가장 큰 사람을 같이 보내는 시도를 반복하는 것인데, 나는 무게제한을 넘지 않는 경우 가장 무거운 사람 둘을 보내는 방식이 가장 효과적인거 아닌가 생각을 했었다.

// 나의 생각이 왜 이 문제를 푸는데 효과적이지 않은지, 그리고 왜 가장 가벼운 사람과 가장 무거운 사람을 같이 보내는게 가장 효과적인지 확실히 이해는 안가지만 일단은 그게 문제를 푸는 핵심인 것으로 보이므로 이렇게 문제를 풀고 이해는 추후에 하는 걸로 결정했다.

// 이렇게하면 이해에 조금 더 도움이 된다.
// '가장 가벼운 사람'입장에서 생각하기. 가장 가벼운 사람 입장에서는 가장 무거운 사람과 탈 수 있는 상황에서 이보다 가벼운 사람과 타는 것은 보트 무게 여유를 낭비하는 것이기 때문에 가장 무거운 사람과 타는게 맞다. 

// 처음 시도한 방식
// function solution(people, limit) {
//     const sortedPeople = [...people].sort((a, b) => a - b);
//     let curWeight = 0;
//     let minBoat = 0;
//     let curOnBoat = 0;
    
//     while(sortedPeople.length > 0) {
//         curWeight += sortedPeople[0];
        
//         if (curWeight > limit || curOnBoat >= 2) {
//             curWeight = 0;
//             curOnBoat = 0;
//             minBoat++;
//         } else if (curWeight === limit) {
//             curWeight = 0;
//             minBoat++;
//             sortedPeople.shift();
//         } else {
//             curOnBoat++;
//             sortedPeople.shift();
//         }
//     }
    
//     if (curWeight !== 0) {
//         minBoat++;
//     }

//     return minBoat;
// }