function solution(n) {
    let newArr = [];
    let answer = 0;
    for(let i = 1; i <= n; i++) {
        if(n%i === 0) {
            newArr.push(i)
        }
    }
    for(let j = 0; j < newArr.length; j++) {
        answer = answer + newArr[j]
    }
    return answer;
}