function solution(n) {
    let i = 1;
    let j = 1;
    let answer = 0;
    while(true) {
        i = i*j;
        if (i>n) {
            answer = answer+j-1
            break;
        }
        j = j+1;
    }
    return answer;
}