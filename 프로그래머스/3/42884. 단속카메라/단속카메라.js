function solution(routes) {
  routes.sort((a, b) => a[1] - b[1]);
  let lastCamera;
  let cameras = 0;
  
  for (let i = 0; i < routes.length; i++) {
      const [start, end] = routes[i];
      
      if (lastCamera && start <= lastCamera) {
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