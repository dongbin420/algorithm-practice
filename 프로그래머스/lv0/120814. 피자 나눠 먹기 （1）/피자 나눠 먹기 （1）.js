function solution(n) {
    let answer;
    if (n%7 === 0) {
        answer = n/7;
    } else {
        answer = parseInt(n/7)+1
    }
    return answer;
}