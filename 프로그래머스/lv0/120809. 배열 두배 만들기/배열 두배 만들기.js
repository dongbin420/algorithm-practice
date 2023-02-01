function solution(numbers) {
    let answer;
    let Array = [];
    for(i=0; i<numbers.length; i++) {
        Array.push(numbers[i]*2);
    }
    answer = Array;
    return answer;
}