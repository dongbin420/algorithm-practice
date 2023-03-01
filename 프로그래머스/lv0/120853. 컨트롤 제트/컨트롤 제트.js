function solution(s) {
    let num = '';
    let answer = 0;
    // for(let i=0; i<s.length; i++) {
    //     if(isNaN(+s[i]) === false && s[i] !== ' ') {
    //         num = num+s[i];
    //         if(i === s.length-1) {
    //             answer = answer + Number(num);
    //         }
    //     } else if ((s[i] === ' ' && isNaN(+s[i+1]) === false)) {
    //         answer = answer + Number(num);
    //         num = '';
    //     } else if (s[i] === ' ' && s[i+1] === 'Z') {
    //         num = '';
    //     }
    // }
    for(let i=0; i<s.length; i++) {
        if(s[i] === '-' && isNaN(+s[i+1]) === false) {
            num = num+s[i]
            if(i === s.length-1) {
                answer = answer + Number(num);
            }
        } else if(isNaN(+s[i]) === false && s[i] !== ' ') {
            num = num+s[i];
            if(i === s.length-1) {
                answer = answer + Number(num);
            }
        } else if ((s[i] === ' ' && s[i+1] !== 'Z')) {
            answer = answer + Number(num);
            num = '';
        } else if (s[i] === ' ' && s[i+1] === 'Z') {
            num = '';
        }
    }
    return answer;
}
// 1. 입력: 숫자와 'Z'가 공백으로 구분되어 담긴 문자열 s
// 2. 출력: 문자열 s를 통해 구한 값
// 3. 조건: 문자열 s에 있는 숫자를 차례대로 더하되, Z가 나오면 바로 전에 더했던 숫자를 뺌.

//* 당연하게도, 내 답은 정석 답이 아니고 너무 난잡하다.. 개선이 필요...