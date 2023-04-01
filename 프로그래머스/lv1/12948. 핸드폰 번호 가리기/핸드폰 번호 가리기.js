function solution(phone_number) {
    let newStr = '';
    for(let i = 0; i < phone_number.length; i++) {
        if(i < phone_number.length-4) {
            newStr = newStr + "*";
        } else {
            newStr = newStr + phone_number[i];
        }
    }
    return newStr;
}