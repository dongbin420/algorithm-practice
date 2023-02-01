function solution(n, k) {
    let answer;
    if (n => 10) {
        answer = (12000*n) + (2000*k) - (2000*(parseInt(n/10)));
    } else {
        answer = (12000*n) + (2000*k); 
    }
    return answer;
}