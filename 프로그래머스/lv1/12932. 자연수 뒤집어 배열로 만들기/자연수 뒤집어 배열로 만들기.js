function solution(n) {
    let newArr = [];
    for(let i = 0; i < String(n).length; i++) {
        newArr.unshift(Number(String(n)[i]))
    }
    return newArr;
}