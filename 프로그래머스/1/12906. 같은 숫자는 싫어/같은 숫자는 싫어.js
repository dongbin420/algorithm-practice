function solution(arr) {
    const answer = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {
            answer.push(arr[i]);
        }
    }
    
    return answer;
}

// function solution(arr) {
//     const answer = [];
    
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === arr[i - 1]) {
//             arr.splice(i, 1);
//             i--;
//         }
//     }
    
//     return arr;
// }














// 오래 전에 풀었던 풀이
// function solution(arr)
// {
//     let newArr = [];
//     for(let i = 0; i < arr.length; i++) {
//         if((arr[i] === arr[i+1] && arr[i] !== arr[i-1]) || (arr[i] !== arr[i-1] && arr[i] !== arr[i+1])) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }