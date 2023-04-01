function solution(numbers) {
    let num = 0;
    for(let i = 0; i <= 9; i++) {
        if(!numbers.includes(i)) {
            num = num + i;
        }
    }
    return num;
}