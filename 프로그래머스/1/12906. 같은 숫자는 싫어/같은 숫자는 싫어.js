// 아래 코드에서 push의 시간 복잡도는 O(1)로, 전체 시간복잡도는 O(n)이 되므로, 아래의풀이보다 효율적임.
function solution(arr) {
    const answer = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {
            answer.push(arr[i]);
        }
    }
    
    return answer;
}

// 아래 코드는 처음에 푼 방식인데, 이 방식은 splice가 최악의 경우 O(n)의 시간 복잡도를 가져, 전체 코드의 시간 복잡도가 O(n^2)이 될수도 있음.
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