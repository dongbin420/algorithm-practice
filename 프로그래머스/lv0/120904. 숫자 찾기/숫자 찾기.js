function solution(num, k) {
    let A = "";
    for(let i = 0; i < String(num).length; i++) {
        if(String(num)[i] === String(k)) {
            A = i+1;
            break;
        } else {
            A = -1;
        }
    }
    return A;
}