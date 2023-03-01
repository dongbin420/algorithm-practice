function solution(numbers) {
    let numStr = '';
    let answer = '';
    for(let i = 0; i<numbers.length; i++) {
        numStr = numStr+numbers[i];
        if(numStr === 'one') {
            answer = answer + '1';
            numStr = '';
        } else if(numStr === 'two') {
            answer = answer + '2';
            numStr = '';
        } else if(numStr === 'three') {
            answer = answer + '3';
            numStr = '';
        } else if(numStr === 'four') {
            answer = answer + '4';
            numStr = '';
        } else if(numStr === 'five') {
            answer = answer + '5';
            numStr = '';
        } else if(numStr === 'six') {
            answer = answer + '6';
            numStr = '';
        } else if(numStr === 'seven') {
            answer = answer + '7';
            numStr = '';
        } else if(numStr === 'eight') {
            answer = answer + '8';
            numStr = '';
        } else if(numStr === 'nine') {
            answer = answer + '9';
            numStr = '';
        } else if(numStr === 'zero') {
            answer = answer + '0';
            numStr = '';
        }
    }
    return Number(answer);
}
// 1. 입력: 숫자를 영어로 표기한 문자열 numbers
// 2. 출력: 입력받은 numbers를 정수로 바꿔 리턴.
// 3. 주의사항: "zero"는 numbers의 맨 앞에 올 수 없음.