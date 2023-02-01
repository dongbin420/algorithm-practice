function solution(my_string, n) {
    let answer = '';
    for(i=0; i<my_string.length; i++) {
        answer += my_string[i].repeat(n);
    }
    return answer;
}

// 문자열.repeat(반복횟수)
// 기억하기