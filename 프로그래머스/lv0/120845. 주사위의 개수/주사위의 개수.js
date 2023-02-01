function solution(box, n) {
    let i = 0;
    let j = 0;
    let k = 0;
    while(true) {
        if(box[0]<n*(i+1)) {
            break;
        }
        i = i+1;
    }
    while(true) {
        if(box[1]<n*(j+1)) {
            break;
        }
        j = j+1;
    }
    while(true) {
        if(box[2]<n*(k+1)) {
            break;
        }
        k = k+1;
    }
    let answer = i*j*k;
    return answer;
}