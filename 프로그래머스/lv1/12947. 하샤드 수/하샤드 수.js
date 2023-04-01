function solution(x) {
    let num = 0;
    for(let i = 0; i < String(x).length; i++) {
        num = num + +String(x)[i]
    }
    if(x%num === 0) {
        return true;
    } else {
        return false;
    }
}