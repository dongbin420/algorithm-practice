function solution(n) {
    let i = 1;
    let j = 1;
    while(6*j<=300) {
        while(6*j<=300) {
            if(n*i === 6*j) {
                break;
            }
            j = j+1;
        }
        if(n*i === 6*j) {
            break;
        }
        j = 1;
        i = i+1;
    }
    return j;
}