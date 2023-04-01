function solution(arr, divisor) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i]%divisor === 0) {
            newArr.push(arr[i])
        }
    }
    if(newArr.length === 0) {
        newArr.push(-1)
        return newArr;
    } else {
        newArr.sort(function(a, b)  {
  return a - b;
});
        return newArr;
    }
}