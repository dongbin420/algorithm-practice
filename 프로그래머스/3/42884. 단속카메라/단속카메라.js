// 아래, 처음에 푼 풀이의 잘못된 점을 파악하고,
// 끝 점을 기준으로 카메라를 설치해간다는 그리디적 아이디어를
// 다시 도출하고 풀면 아래와 같이 간단하게 풀 수 있음.
function solution(routes) {
  routes.sort((a, b) => a[1] - b[1]);
  let lastCamera;
  let cameras = 0;
  
  for (let i = 0; i < routes.length; i++) {
      const [start, end] = routes[i];
      
      if (lastCamera !== undefined && start <= lastCamera) { // lastCamera의 끝 값이 0일 경우도 있기 때문에, undefined로 판단하는게 더 좋을 것으로 보임.
          continue;
      } else {
          lastCamera = end;
          cameras++;
      }
  }
  
  return cameras;
}

// 처음에 푼 풀이
// 문제가 꽤 많음
// 1. 겹치는 것만 확인하면, 몇 몇 자동차가 카메라를 마주치지 못하지만,
// 코드에서는 마주치는 걸로 체크된다.
// 2. 이중 for문으로 n^2의 시간복잡도
// 3. 정렬을 하지 않음
// function solution(routes) {
//     const cameraRoutes = {};
    
//     for (let i = 0; i < routes.length; i++) {
//         const [start, end] = routes[i];
//         let foundRoute = false;
        
//         if (Object.keys(cameraRoutes).length !== 0) {
//             for (const value of Object.values(cameraRoutes)) {
//                 const [cameraStart, cameraEnd] = value;
                
//                 if (start <= cameraEnd && cameraStart <= end) {
//                     foundRoute = true;
                    
//                     break;
//                 }
//             }
            
//             if (!foundRoute) {
//                 cameraRoutes[i] = [start, end];
//             }
//         } else {
//             cameraRoutes[i] = [start, end];
//         }
//     }
    
//     return Object.keys(cameraRoutes).length;
// }