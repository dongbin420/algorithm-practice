function solution(n) {
    let Array = [];
    let double;
    let i = 1;
    let answer;
    while(true) {
        double = i**2;
        if (double > 1000000) {
            break;
        }
        Array.push(double);
        i++;
    }
    if (Array.includes(n)) {
        answer = 1;
    } else {
        answer = 2;
    }
    return answer;
}