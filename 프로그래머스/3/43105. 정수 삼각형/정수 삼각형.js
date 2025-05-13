function solution(triangle) {
  const n = triangle.length;
  const dp = Array.from({ length: n }, (_, i) => Array(i+1).fill(0));
  dp[0][0] = triangle[0][0];

  for (let i = 1; i < n; i++) {
    const row = triangle[i];

    for (let j = 0; j <= i; j++) {
      if (j === 0) {
        dp[i][j] = dp[i-1][j] + row[j];
      } else if (j === i) {
        dp[i][j] = dp[i-1][j-1] + row[j];
      } else {
        dp[i][j] = Math.max(dp[i-1][j-1], dp[i-1][j]) + row[j];
      }
    }
  }

  return Math.max(...dp[n-1]);
}

// function solution(triangle) {
//   const n = triangle.length;
//   const dp = triangle.map(row => Array(row.length).fill(0));
//   dp[0][0] = triangle[0][0];

//   for (let i = 1; i < n; i++) {
//     for (let j = 0; j <= i; j++) {
//       if (j === 0) {
//         dp[i][j] = dp[i-1][j] + triangle[i][j];
//       } else if (j === i) {
//         dp[i][j] = dp[i-1][j-1] + triangle[i][j];
//       } else {
//         dp[i][j] = Math.max(dp[i-1][j-1], dp[i-1][j]) + triangle[i][j];
//       }
//     }
//   }

//   return Math.max(...dp[n-1]);
// }

// *위 풀이의 아이디어는,
// 첫번째 행인 7부터 아래로 내려가면서
// 다음 행과 더하고, 그 더한 값을 dp에 저장하는 것.
// dp가 의미하는 것은 현재 행의 각 수들이 이전까지 적립된 수에
// 더해진 결과들의 모음인 것.
// 마지막까지 for문이 진행되면 마지막 행의 dp가 완성되고 이는
// 모든 경우를 다 더한 5가지 값(문제에 제시된 입력값으로 생각하면)
// 으로 이루어진 배열이므로 이 중에서 가장 큰 값이 정답이 되는 것.

// *이런 아이디어를 생각해내는 과정을 정리하면
// 1. 삼각형의 높이가 n이면 모든 가능한 합의 경우의 수는 2^n-1
// 2. n의 크기가 커지면 커질 수록 모든 경우를 다 탐색하는 건 불가능함을 인지(비효율)
// 3. dp를 사용해서 이전 경우들을 이용해 합의 경우를 찾을 생각을 하기
// 4. 더해가다보면, 각 행의 맨 왼쪽과 맨 오른쪽은 쭉 이어서 더하면 되지만, 중간에 있는 값들은 이전 행에서 둘 중의 하나를 골라야함. 이 중에 최댓값으로 중간 값들을 형성시키면 됨.
// 5. triangle의 길이-1에 해당하는 인덱스 즉 dp의 마지막 인덱스 배열에서 최댓값을 뽑으면 정답이 나옴.

// *복습
// 정수 삼각형 문제 논리적으로, 순차적으로 이해&풀어나가기
// 1. 73824, 73825 ... 이런식으로 가능한 합의 모든 경우는 16개네.. 이 중 가장 큰 수를 찾아야한다는거지?
// 2. 근데 삼각형의 높이는 500까지도 가능하니까 500인 경우는 경우의 수가 어마무시 하겠네?
// 3. 합을 높이를 이동하면서 더해가면서, 이전 높이까지의 합을 이용하는 dp 방식을 이용할 수 있을거 같은데?
// 4. dp라는 배열을 만들고, 각 인덱스에 해당하는 높이까지의 합을 저장하는식으로 진행하면 될거 같다.
// 5. 예를 들어 dp[0]에는 7하나만 가지는 배열이 들어가고,
// dp[1]에는 10과 15, dp[2]에는 18, 11, 16, 15가 되겠지?
// 6. 어 근데, 양쪽 끝에 위치한 18과 15는 그냥 다음 높이의 값들을 쭉 더하면
// 문제없이 진행되겠지만, 11과 16은 다음 행에서 같은 수들을 더하는 위치에
// 존재하니까 둘 중에 그냥 큰 수로 하면 굳이 둘 다 고려할 필요 없겠는데?
// (위 생각은, 바로는 생각이 안나지만, 조금만 신중하게 생각하면 무조건
// 해야하는 생각인게, 중간값들을 모두 저장하면서 가면 500 높이일때, 그 경우는
// 모든 경우를 고려하는 것과 큰 차이 없이 비슷하게 결과가 나온다. 중간값을 통합
// 해야는 경우는 1+2+3+....+500 이게 최대이기에 이 프로세스는 굉장히 중요한
// 작업인 것.)
// 7. 이렇게 양쪽 끝, 그리고 중간 값들의 합들 중 최댓값을 가장 아래 높이까지
// 구해 마지막 dp요소 배열의 최댓값을 구하면 답이 나옴.


// *처음에 푼 방식
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