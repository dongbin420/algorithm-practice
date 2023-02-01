function solution(numbers) {
    let max = -100000000;
    let k = 1;
    for(let i = 0; i<numbers.length-1; i++) {
        for(let j = k; j<numbers.length; j++){
            if(max < numbers[i]*numbers[j]) {
            max = numbers[i]*numbers[j]
            }
        }
        k = k+1;
    }
    return max;
}