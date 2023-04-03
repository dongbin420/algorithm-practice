function solution(n, m) {
    let maxBoth = 0
    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= m; j++) {
            if(n%i === 0 && m%j === 0 && i === j) {
                if(maxBoth < i) {
                    maxBoth = i;
                }
            }
        }
    }
    let i = 1;
    let j = 1;
    let num1 = n;
    let num2 = m;
    while(true) {
        if(num1 > num2) {
            j = j+1
            num2 = m * j
        } else if (num1 < num2) {
            i = i+1
            num1 = n * i
        } else if (num1 === num2) {
            return [maxBoth, num1]
        }
    }
}