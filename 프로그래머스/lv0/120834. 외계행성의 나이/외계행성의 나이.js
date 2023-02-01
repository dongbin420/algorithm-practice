function solution(age) {
    let arr = [];
    let age1 = String(age);
    for(let i = 0; i < age1.length; i++) {
        if(age1[i] === '0') {
            arr.push('a');
        } else if(age1[i] === '1') {
            arr.push('b');
        } else if(age1[i] === '2') {
            arr.push('c');
        } else if(age1[i] === '3') {
            arr.push('d');
        } else if(age1[i] === '4') {
            arr.push('e');
        } else if(age1[i] === '5') {
            arr.push('f');
        } else if(age1[i] === '6') {
            arr.push('g');
        } else if(age1[i] === '7') {
            arr.push('h');
        } else if(age1[i] === '8') {
            arr.push('i');
        } else if(age1[i] === '9') {
            arr.push('j');
        }
    }
    let answer = '';
    
    if(age<10) {
        answer = answer + arr[0];
    } else if(10<=age && age<100) {
        answer = answer + arr[0] + arr[1];
    } else if(100<=age && age<1000) {
        answer = answer + arr[0] + arr[1] + arr[2];
    } else if(age === 1000) {
        answer = answer + arr[0] + arr[1] + arr[2] + arr[3];
    }
    
    return answer;
}