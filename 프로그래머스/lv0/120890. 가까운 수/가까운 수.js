function solution(array, n) {
    array.sort();
    let number = Math.abs(array[0]-n);
    let answer = array[0];
    for(i=1; i<array.length; i++) {
        if(Math.abs(array[i]-n) < number) {
            number = Math.abs(array[i]-n)
            answer = array[i]
    }
}
    return answer;
}