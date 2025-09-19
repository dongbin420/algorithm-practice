// dfs 방식(재귀)
// function solution(numbers, target) {
//     let cases = 0;
    
//     const dfs = (idx, curSum) => {
//         if (idx === numbers.length) {
//             if (curSum === target) {
//                 cases++;
//             }
            
//             return;
//         }
        
//         dfs(idx + 1, curSum + numbers[idx]);
//         dfs(idx + 1, curSum - numbers[idx]);
//     }
    
//     dfs(0, 0);
    
//     return cases;
// }

// DFS방식(스택)
// function solution(numbers, target) {
//     let cases = 0;
//     const stack = [[0, 0]];
    
//     while (stack.length > 0) {
//         const [idx, curSum] = stack.pop();
        
//         if (idx === numbers.length) {
//             if (curSum === target) {
//                 cases++;
//             }
            
//             continue;
//         }
        
//         stack.push([idx + 1, curSum + numbers[idx]]);
//         stack.push([idx + 1, curSum - numbers[idx]]);
//     }
    
//     return cases;
// }


// BFS 방식
// function solution(numbers, target) {
//     let cases = 0;
//     const queue = [[0, 0]];
    
//     while (queue.length > 0) {
//         const [idx, curSum] = queue.shift();
        
//         if (idx === numbers.length) {
//             if (curSum === target) {
//                 cases++;
//             }
            
//             continue;
//         }
        
//         queue.push([idx + 1, curSum + numbers[idx]]);
//         queue.push([idx + 1, curSum - numbers[idx]]);
//     }
    
//     return cases;
// }



const solution = (numbers, target) => {
  let cnt = 0;
  
  const dfs = (start, sum) => {
    if (sum === target && start === numbers.length) {
      cnt++;

      return;
    }

    let minus = -numbers[start];
    let plus = numbers[start];

    if (start < numbers.length) {
      dfs(start + 1, sum + minus);
      dfs(start + 1, sum + plus);
    }
  }

  dfs(0, 0);

  return cnt;
}
