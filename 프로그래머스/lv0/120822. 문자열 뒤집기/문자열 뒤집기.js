function solution(my_string) {
    let string = my_string[my_string.length-1];
    for(i=1; i<my_string.length; i++) {
        string = string + my_string[my_string.length-1-i]
    }
    return string
}