function solution(my_string) {
    let answer = [];
    let max = 0;
    for(i=0; i<my_string.length; i++) {
        if(!isNaN(my_string[i])) {
            answer.push(+my_string[i]);
        }    
    }
    answer.sort(function (a, b) {
        return a - b;
    });
    return answer;
}

// 배열을 오름차순으로 나타내는 방법 -> 복습하면서 원리 익히는게 필요해보임.