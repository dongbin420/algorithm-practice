function solution(s){
    let countP = 0;
    let countY = 0;
    for(let i = 0; i < s.length; i++) {
        if(s[i].toLowerCase() === 'p') {
            countP = countP + 1;
        } else if(s[i].toLowerCase() === 'y') {
            countY = countY + 1;
        }
    }
    if(countP === countY) {
        return true;
    } else {
        return false;
    }
}