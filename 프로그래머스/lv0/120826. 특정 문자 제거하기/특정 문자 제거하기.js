function solution(my_string, letter) {
    let answer = my_string;
    for(i=0; i<my_string.length; i++) {
        if (my_string[i] === letter) {
            answer = answer.replace(my_string[i], '');
        }
    }
    return answer;
}