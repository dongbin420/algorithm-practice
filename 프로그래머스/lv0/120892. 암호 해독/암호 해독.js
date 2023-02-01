function solution(cipher, code) {
    let i = 1;
    let letter = [];
    while(true) {
        letter.push(cipher[code*i-1]);
        i = i + 1;
        if(i*code>cipher.length) {
            break;
        }
    }
    let answer = letter.join('');
    return answer;
}