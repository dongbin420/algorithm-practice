function solution(n) {
    let Array = [];
    for(i=0; i<Math.ceil(n/2); i++) {
        Array.push(2*i+1);
    }
    return Array;
}