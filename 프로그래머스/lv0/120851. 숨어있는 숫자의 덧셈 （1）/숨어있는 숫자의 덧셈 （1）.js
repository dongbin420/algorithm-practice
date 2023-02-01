function solution(my_string) {
    let answer = 0;
    for(i=0; i<my_string.length; i++) {
        if(!isNaN(my_string[i])) {
            answer += +my_string[i];
        }
    }
    return answer;
}

// isNaN 는 타입이 문자열이든 숫자든 그 안에 든 요소가 진짜 숫자인지 아닌지를 판단해 TRUE와 FALSE를 제출한다.
// +'문자열'의 타입은 숫자이지만 isNaN을 통해 NaN임을 알 수 있다. 
// NaN의 타입은 또한 숫자이다(typeof를 이용하면 알 수 있다.)