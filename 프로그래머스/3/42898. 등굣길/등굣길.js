function solution(m, n, puddles) {
  const MOD = 1000000007;
  const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
  puddles.forEach(([c, r]) => dp[r][c] = -1);
  dp[1][1] = dp[1][1] === -1 ? 0 : 1;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (i === 1 && j === 1) continue;

      if (dp[i][j] === -1) {
        dp[i][j] = 0;
      } else {
        const fromTop = i > 1 ? dp[i - 1][j] : 0;
        const fromLeft = j > 1 ? dp[i][j - 1] : 0;
        dp[i][j] = (fromTop + fromLeft) % MOD
      }
    }
  }

  return dp[n][m];
}