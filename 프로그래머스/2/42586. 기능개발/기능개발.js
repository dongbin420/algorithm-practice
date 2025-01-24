function solution(progresses, speeds) {
    const answer = [];
    
    while (progresses.length > 0) {
        let completedCnt = 0;
        
        for (let i = 0; i < progresses.length; i++) {
            if (progresses[i] < 100) {
                progresses[i] += speeds[i];
            }
            
            if (progresses[0] >= 100) {
                completedCnt++;
                progresses.shift();
                speeds.shift();
                i--;
            }
        }
        
        if (completedCnt > 0) {
            answer.push(completedCnt);
        }
        
        console.log(progresses);
    }
    
    return answer;
}