function solution(n) {
    let newStr = '';
    for(let i = 1; i <= n; i++) {
        if(i%2 === 1) {
            newStr = newStr + "수"
        } else {
            newStr = newStr + "박"
        }
    }
    return newStr;
}