function solution(my_string, num1, num2) {
    let new_string = "";
    for(let i = 0; i < my_string.length; i++) {
        if(i === num1) {
            new_string = new_string + my_string[num2];
        } else if(i === num2) {
            new_string = new_string + my_string[num1];
        } else {
           new_string = new_string + my_string[i]; 
        }
    }
    return new_string;
}