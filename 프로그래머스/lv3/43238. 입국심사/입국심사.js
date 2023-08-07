function solution(n, times) {
    
    // max_1 = 심사관 중에 가장 오래 걸리는 시간
    // 오름 차순 정렬
    times.sort((a, b) => a - b);
    
    let minTime = times[0];
    let maxTime = times[times.length - 1] * n;
    
    let answer = maxTime;
    
    while(minTime <= maxTime) {
        let midTime = Math.floor((minTime+maxTime)/2);
        
        let count = 0;
        
        for (let time of times) {
            count += Math.floor(midTime/time);
        }
        
        if (count >= n) {
            
            answer = midTime;
            // 조건을 충족한 경우
            maxTime = midTime - 1;
        } else {
            // 조건을 충족 하지 못한 경우
            minTime = midTime + 1;
        }
    }
    
    return answer;
}