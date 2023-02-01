function solution(array, n) {
    let answer = 0;
    let length = array.length;
    for(i=0; i<length; i++) {
        if(array[i] === n) {
            answer++;
        }
    }
    return answer;
}