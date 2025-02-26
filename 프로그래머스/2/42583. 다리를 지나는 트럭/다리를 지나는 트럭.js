function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  let totalWeight = 0;
  const waiting = [...truck_weights];
  const bridge = [];

  while (waiting.length > 0 || bridge.length > 0) {
    if (waiting.length > 0 && totalWeight + waiting[0] <= weight) {
      const truck = waiting.shift();
      bridge.push({ weight: truck, time: 0 });
      totalWeight += truck;
    }

    bridge.forEach((truck) => truck.time++);

    if (bridge.length > 0 && bridge[0].time === bridge_length) {
      const finished = bridge.shift();
      totalWeight -= finished.weight;
    }

    time++;
  }

  return time + 1;
}
// 위는 다리를 건너는 차들을 직관적인 시점으로 구성한 코드
// 단, 마지막에 time에 1을 더해줘야 한다.
// 왜냐하면 예를 들어, 실제 예제에서는 '현재 시점'에 2초를 지난 차가
// 여전히 다리 위에 있고, 그 다음 1초가 지났을때 빠져 나간다.
// 하지만, 위와 같이 직관적인 순서로 코드를 구성하면 
// 2초가 지나고 같은 while문 순회 시점에 바로 빠져나간다.
// 따라서 마지막 순회에 bridge가 비게되며 '실제로' 빠져나가는 시점의 
// 초보다 1초 빠르게 time이 구성된다. 따라서 마지막에 time에 1을 추가해줘야
// 예제의 프로세스를 만족하는 로직을 구성할 수 있게 된다. 
// 이런 초 보정이 필요없게 하기 위해 약간은 직관적이지 않은 방식으로 
// 코드를 구성해서 time을 바로 반환할 수도 있지만 나는 직관적인 방식으로 풀고 보정하는게 더 이해하기 쉽다고 판단했다.

// while문 로직 자체만 보면, 첫번째 방식이 더 직관적이라 생각할 수 있지만 결과만 생각하면 두번째 방식이 직관적인 답을 낸다.(두번째 방식에선 마지막 while 이전에 무게6 차가 소요시간 2인 상태로 존재하고 마지막 while 문에서 8초가 되면서 다리를 빠져나간다.)(따라서, 두번째 방식도 하나하나 변수나 배열이 바뀌는 것을 쫓아가면 납득이 된다는 말.)

// 아래가 직관적이지 않지만, 보정이 필요없는 방식으로 구현한 코드
// function solution(bridge_length, weight, truck_weights) {
//   // 현재까지 소요된 시간
//   let current_time = 0;
//   // 현재 다리위에 있는 차들의 무게 합
//   let current_bridge_weight = 0;
//   // 대기 중인 차들
//   const waiting_queue = [...truck_weights];
//   // 다리 위에서 건너고 있는 차들
//   const on_bridge_queue = [];

//   // 대기 중인 차도, 건너고 있는 차도 없는 동안 차 이동. 즉, 모든 차가 다 건넜음을 의미
//   while (waiting_queue.length > 0 || on_bridge_queue.length > 0) {
//     // 건너기 시작, 시간 증가
//     current_time++;

//     // 가장 앞에 있는(가장 먼저 출발한) 차가 시간이 bridge_length 만큼 이동해서 다리를 건넜으면 제거
//     if (on_bridge_queue.length > 0 && on_bridge_queue[0].time === bridge_length) {
//       const finishedTruck = on_bridge_queue.shift();
//       current_bridge_weight -= finishedTruck.weight;
//     }

//     // 다리 위에 있는 모든 트럭들 한 칸씩 이동해서 시간(1초) 증가
//     // on_bridge_queue가 비어있는 경우, forEach 내부의 콜백함수는 한 번도 호출되지 않음. 그러므로 truck.time에서 에러가 발생x
//     on_bridge_queue.forEach((truck) => truck.time++);

//     // 대기 큐의 맨 앞 트럭이 무게 제한에 걸리지 않아 다리에 진입할 수 있으면 다리에 진입
//     if (waiting_queue.length > 0 && current_bridge_weight + waiting_queue[0] <= weight) {
//       const truck = waiting_queue.shift();
//       on_bridge_queue.push({ weight: truck, time: 1 });
//       current_bridge_weight += truck;
//     }
//   }
  
//   return current_time;
// }



// 오래전에, 제대로 이해하지 못한 상태에서 푼 풀이
// function solution(bridge_length, weight, truck_weights) {
//     let bridge = []; // 다리를 건너는 트럭의 무게와 트럭의 위치를 저장하는 큐
//     let total_weight = 0; // 다리 위의 트럭의 무게를 저장할 변수 초기화
//     let time = 0; // 경과 시간을 저장할 변수 초기화
 
 
//     // 모든 트럭이 큐에서 나올 때까지 반복
//     while (bridge.length > 0 || truck_weights.length > 0) {
//       // 경과 시간을 1초 증가시킴
//       time++;
 
//       // 큐에 있는 트럭들의 위치를 1씩 증가시킴
//       for (let i = 0; i < bridge.length; i++) {
//         bridge[i][1]++;
//       }
 
//       // 큐의 첫 번째 트럭이 다리 끝에 도달했다면
//       if (bridge[0] && bridge[0][1] >= bridge_length) {
//         // 큐에서 제거하고 totalWeight를 갱신함
//         const truck = bridge.shift();
//         total_weight -= truck[0];
//       }
// // 대기 중인 트럭이 있고, 다리에 진입할 수 있다면
//       if (truck_weights.length > 0 &&
//         bridge.length < bridge_length &&
//         total_weight + truck_weights[0] <= weight) {
 
//         // 큐에 트럭의 무게와 트럭의 위치를 추가하고 total_weight를 갱신함
//         let truck_weight = truck_weights.shift();
//         bridge.push([truck_weight, 0]);
//         total_weight += truck_weight;
//       }
//     }
 
//     // 경과 시간을 반환함
//     return time;
//   }
