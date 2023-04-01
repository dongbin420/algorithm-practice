function solution(a, b) {
    let num = 0;
    if(a <= b) {
       for(let i = a; i <= b; i++) {
        num = num+i
    }
    return num; 
    } else {
        for(let i = b; i <= a; i++) {
        num = num+i
    }
    return num; 
    }
    
}