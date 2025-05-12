function solution(triangle) {
  const n = triangle.length;
  const dp = triangle.map(row => Array(row.length).fill(0));
  dp[0][0] = triangle[0][0];

  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      if (j === 0) {
        dp[i][j] = dp[i-1][j] + triangle[i][j];
      } else if (j === i) {
        dp[i][j] = dp[i-1][j-1] + triangle[i][j];
      } else {
        dp[i][j] = Math.max(dp[i-1][j-1], dp[i-1][j]) + triangle[i][j];
      }
    }
  }

  return Math.max(...dp[n-1]);
}

// 위 풀이의 아이디어는,
// 첫번째 행인 7부터 아래로 내려가면서
// 다음 행과 더하고, 그 더한 값을 dp에 저장하는 것.
// dp가 의미하는 것은 현재 행의 각 수들이 이전까지 적립된 수에
// 더해진 결과들의 모음인 것.
// 마지막까지 for문이 진행되면 마지막 행의 dp가 완성되고 이는
// 모든 경우를 다 더한 5가지 값(문제에 제시된 입력값으로 생각하면)
// 으로 이루어진 배열이므로 이 중에서 가장 큰 값이 정답이 되는 것.

// 이런 아이디어를 생각해내는 과정을 정리하면
// 1. 삼각형의 높이가 n이면 모든 가능한 합의 경우의 수는 2^n-1
// 2. n의 크기가 커지면 커질 수록 모든 경우를 다 탐색하는 건 불가능함을 인지(비효율)
// 3. dp를 사용해서 이전 경우들을 이용해 합의 경우를 찾을 생각을 하기
// 4. 더해가다보면, 각 행의 맨 왼쪽과 맨 오른쪽은 쭉 이어서 더하면 되지만, 중간에 있는 값들은 이전 행에서 둘 중의 하나를 골라야함. 이 중에 최댓값으로 중간 값들을 형성시키면 됨.
// 5. triangle의 길이-1에 해당하는 인덱스 즉 dp의 마지막 인덱스 배열에서 최댓값을 뽑으면 정답이 나옴.


// 처음에 푼 방식
// function solution(triangle) {
//     const dp = Array(6).fill().map(() => []);
//     dp[1].push(triangle[0][0]);
  
//     const calculate = (idx) => {
//         if (idx === triangle.length + 1) {
//             return;
//         }
        
//         for (let i = 0; i < dp[idx-1].length; i++) {
//             dp[idx].push(dp[idx-1][i] + triangle[idx-1][i]);
//             dp[idx].push(dp[idx-1][i] + triangle[idx-1][i + 1]);
//         }
        
//         calculate(idx + 1);
//     }
    
//     if (triangle.length === 1) {
//         return dp[1][1];
//     } else {
//         calculate(2);
//     }
    
//     console.log(dp);
    
//     return Math.max(...dp[triangle.length]);
// }