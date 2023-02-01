function solution(my_string) {
    let string = my_string;
    
    for (i = 0; i < string.length; i++) {
        if (string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u') {
        my_string = my_string.replace(string[i], '');
    }
}
return my_string;
}

// 뭔가 애매한데.. 복습필요함