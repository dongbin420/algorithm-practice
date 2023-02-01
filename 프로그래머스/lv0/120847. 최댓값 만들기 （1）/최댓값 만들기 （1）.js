function solution(numbers) {
    let max = 0; 
    for(i=0; i<numbers.length; i++) {
        for(j=1+i; j<numbers.length; j++) {
            if (max<numbers[i]*numbers[j]) {
                max = numbers[i]*numbers[j];
            }
        }
    }
    return max;
}