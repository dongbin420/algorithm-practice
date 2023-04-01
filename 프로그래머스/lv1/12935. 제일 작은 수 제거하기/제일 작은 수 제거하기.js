function solution(arr) {
    let min = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(min > arr[i]) {
            min = arr[i]
        }
    }
    for(let j = 0; j < arr.length; j++) {
        if(arr[j] === min) {
            arr.splice(j, 1)
        }
    }
    if(arr.length === 0) {
        return [-1];
    } else {
        return arr;
    }
}