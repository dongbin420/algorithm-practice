function solution(triangle) {
    const dp = Array(6).fill().map(() => []);
    dp[1].push(triangle[0][0]);
  
    const calculate = (idx) => {
        if (idx === triangle.length + 1) {
            return;
        }
        
        for (let i = 0; i < dp[idx-1].length; i++) {
            dp[idx].push(dp[idx-1][i] + triangle[idx-1][i]);
            dp[idx].push(dp[idx-1][i] + triangle[idx-1][i + 1]);
        }
        
        calculate(idx + 1);
    }
    
    if (triangle.length === 1) {
        return dp[1][1];
    } else {
        calculate(2);
    }
    
    console.log(dp);
    
    return Math.max(...dp[triangle.length]);
}