function solution(prices) {
    const times = [];
    
    for (let i = 0; i < prices.length; i++) {
        const currentPrice = prices[i];
        let sec = 0;
        
        for (let j = i + 1; j < prices.length; j++) {
            if (currentPrice <= prices[j]) {
                sec++;
            } else {
                sec++;
                
                break;
            }
        }
        
        times.push(sec);
    }
    
    return times;
}