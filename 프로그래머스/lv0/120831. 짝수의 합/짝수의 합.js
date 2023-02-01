function solution(n) {
    let answer = 0;
    if (n % 2 === 0) {
        for (i = 0; i <= n/2; i++) {
            answer = answer + 2*i;
        }
    } else if (n % 2 !== 0) {
        for (j = 0; j <= (n - 1)/2; j++) {
            answer = answer + 2*j
        }
    }
    return answer;
}