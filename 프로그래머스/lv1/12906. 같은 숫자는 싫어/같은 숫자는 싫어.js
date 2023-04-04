function solution(arr)
{
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        if((arr[i] === arr[i+1] && arr[i] !== arr[i-1]) || (arr[i] !== arr[i-1] && arr[i] !== arr[i+1])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}