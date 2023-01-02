function solution(my_string) {
    let answer = '';
    my_string = my_string.toLowerCase();
    let arr = [];
    for(let i = 0; i < my_string.length; i++) {
        arr.push(my_string[i]);
    }
    arr.sort();
    for(let j = 0; j < arr.length; j++) {
        answer = answer + arr[j];
    }
    return answer;
}
