// 아래 제출 코드 조금 개선한 코드
function solution(priorities, location) {
  const priorAndTarget = priorities.map((prior, idx) => {
    return { prior, target: idx === location };
  })
  let orderCnt = 0;

  while (priorAndTarget.length > 0) {
    const maxPrior = Math.max(...priorAndTarget.map((ele) => ele.prior));
    const executedProcess = priorAndTarget.shift();

    if (executedProcess.prior === maxPrior) {
      orderCnt++;

      if (executedProcess.target) return orderCnt;
    } else {
      priorAndTarget.push(executedProcess);
    }
  }
}

// 제출 코드(정답)
// function solution(priorities, location) {
//     const prioritiesAndIdx = priorities.map((prior, i) => ({ prior, idx: i }));
//     let orderCnt = 0;
    
//     while (prioritiesAndIdx.length > 0) {
//         const maxPriority = Math.max(...prioritiesAndIdx.map((ele) => ele.prior));
        
//         if (prioritiesAndIdx[0].prior === maxPriority) {
//             const deleted = prioritiesAndIdx.shift();
//             orderCnt++;
            
//             if (deleted.idx === location) {
//                 return orderCnt;
//             }
//         } else {
//             prioritiesAndIdx.push(prioritiesAndIdx.shift());
//         }
//     }
// }
    
    
// 이전 시도1(틀린 코드)
// function solution(priorities, location) {
//     const prioritiesAndIdx = [];
//     let orderCnt = 0;
//     priorities.forEach((prior, i) => prioritiesAndIdx.push({prior: prior, idx: i, order: null }));
    
//     while (prioritiesAndIdx.length > 0) {
//         if (prioritiesAndIdx[0].prior === Math.max(...prioritiesAndIdx.map((ele) => ele.prior))) {
//             prioritiesAndIdx.shift();
//             prioritiesAndIdx[0].order = ++orderCnt;
//         } else {
//             prioritiesAndIdx.push(prioritiesAndIdx.shift());
//         }
//     }
    
//     return prioritiesAndIdx[location].order;
// }

  
// 이전 시도2(틀린 코드)
// function solution(priorities, location) {
//     const order = Array(priorities.length);
//     let orderCnt = 0;
//     let orderNum = 0;
    
//     while (priorities.length > 0) {
//         if (priorities[0] === Math.max(...priorities)) {
//             priorities.shift();
//             order[] = ++orderCnt;
//         } else {
//             priorities.push(priorities.shift());
//         }
//     }
    
//     return order[location];
// }