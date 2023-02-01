function solution(array, height) {
    let answer = 0;
    let length = array.length;
    for(i=0; i<length; i++) {
        if(array[i]>height) {
            answer++;
        }
    }
    return answer;
}