function solution(n) {
    var answer = 0;
    let cnt = 1;
    while(true) {
        if(n%cnt === 0) {
            answer++;
        }
        cnt = cnt + 1;
        if (cnt > n) {
            break;
        }
    }
    return answer;
}