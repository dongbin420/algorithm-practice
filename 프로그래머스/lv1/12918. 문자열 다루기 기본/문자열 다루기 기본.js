function solution(s) {
    let isNum = true;
    if((s.length === 4 || s.length === 6)) {
        for(let i = 0; i < s.length; i++) {
            if(isNaN(Number(s[i])) === true) {
                isNum = false
            }
        }
        return isNum;
    } else {
        return false;
    }
}