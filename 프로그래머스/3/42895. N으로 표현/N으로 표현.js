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

// 위 코드의 동작 방식
// i가 1일땐, 첫번째 for문만 실행되고 오직 한개 N만 dp에 더해짐
// i가 2일땐, 첫번째 for문으로 NN이 dp에 더해지고 두번째 for문은
// 한 번만 실행됨. dp[1]의 1개 N을 가지고 N을 두 개 쓰는 모든 경우의 수를
// dp[2]에 추가함. 예를 들어, N + N, N - N, N / N, N * N
// i가 3일땐, 첫번째 for문으로 NNN이 dp에 더해지고 세번째 for문은
// 두번 실행됨. dp[1]과 dp[2]의 요소들의 모든 사칙연산 조합과
// dp[2]와 dp[1](반대 방향 사칙연산도 고려해야하니)의 요소들의
// 모든 사칙연산 조합이 dp[3]에 저장됨. 이렇게 이전 dp요소들을
// 이용해서 다음의 dp요소들을 만들어내어 dp방식으로 문제를 푸는 것.


// 첫번째 시도(틀린 코드)
// 틀린 부분은 여러가지가 있는데 다음과 같다.
// 1. idx를 활용하는 부분이 잘못됨. 
// 4이면, (1, 3), (2, 2), (3, 1) dp의 조합이어야 되는데
// 코드에선 (2, 3)만 고려함
// 2. N이 붙어서 만들어지는 수가 잘못 만들어지고 있음.
// 3. 뺄셈, 나눗셈에 대해서 반대 방향 연산이 추가되지 않음
// 4. 0으로 나뉘는 경우 예외처리 누락
// 5. -1 리턴 누락
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