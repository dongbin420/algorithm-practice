function solution(N, number) {
  const dp = Array.from({ length: 9 }, () => new Set());

  for (let i = 1; i <= 8; i++) {
    dp[i].add(Number(String(N).repeat(i)));

    for (let j = 1; j < i; j++) {
      for (const a of dp[j]) {
        for (const b of dp[i - j]) {
          dp[i].add(a + b);
          dp[i].add(a - b);
          dp[i].add(a * b);
          if(b !== 0) dp[i].add(Math.floor(a / b));
        }
      }
    }

    if (dp[i].has(number)) {
      return i;
    }
  }

  return -1;
}

// 첫번째 시도(틀린 코드)
// function solution(N, number) {
//     const dp = Array.from({ length: 9 }, () => new Set());
//     dp[1].add(N);
//     dp[2].add(Number(String(N)+String(N)));
//     dp[2].add(N+N);
//     dp[2].add(N-N);
//     dp[2].add(N*N);
//     dp[2].add(Math.floor(N/N));
    
//     const makeExps = (idx) => {
//         for (const num1 of dp[idx-2]) {
//             for (const num2 of dp[idx-1]) {
//                 dp[idx].add(Number(String(num1)+String(num2)));
//                 dp[idx].add(num1 + num2);
//                 dp[idx].add(num1 - num2);
//                 dp[idx].add(num1 * num2);
//                 dp[idx].add(Math.floor(num1 / num2));
//             }
//         }
//     }
    
//     for (let k = 3; k <= 8; k++) {
//         makeExps(k);
//     }
    
//     for (let l = 1; l <= 8; l++) {
//         if (dp[l].has(number)) {
//             return l;
//         }
//     }
// }