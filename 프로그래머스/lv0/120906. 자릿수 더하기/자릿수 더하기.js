function solution(n) {
    let answer = 0;
    let num = String(n);
    for(i=0; i<num.length; i++) {
        answer += +num[i];
    }
    return answer;
}