function solution(n) {
    let newArr = [];
    let newStr = '';
    for(let i = 0; i < String(n).length; i++) {
        newArr.push(Number(String(n)[i]))
    }
    newArr.sort(function(a, b)  {
  return b - a;
});
    for(let j = 0; j < newArr.length; j++) {
        newStr = newStr + String(newArr[j])
    }
    return Number(newStr);
}