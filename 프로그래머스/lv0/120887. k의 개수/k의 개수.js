function solution(i, j, k) {
    let answer = 0;
    for(a=i; a<=j; a++) {
        for(b=0; b<String(a).length; b++) {
            if(String(a)[b] === String(k)) {
                answer = answer+1
            }
        }
    }
    return answer;
}