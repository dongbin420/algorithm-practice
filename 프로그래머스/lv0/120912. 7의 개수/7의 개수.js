function solution(array) {
    let answer = 0;
    for(i=0; i<array.length; i++) {
        for(j=0; j<String(array[i]).length; j++) {
            if(String(array[i])[j] === '7') {
                answer = answer + 1
            }
        }
    }
    return answer;
}