// 다시 풀기
function solution(arr, divisor) {
    const validArr = [];
    
    for (let i = 0; i < arr.length; i++) {
        const isValid = arr[i] % divisor === 0;
        
        if (isValid) {
            validArr.push(arr[i]);
        }
    }
    
    if (validArr.length === 0) {
        return [-1];
    }
    
    return validArr.sort((a, b) => a - b);
}














// function solution(arr, divisor) {
//     let newArr = [];
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i]%divisor === 0) {
//             newArr.push(arr[i])
//         }
//     }
//     if(newArr.length === 0) {
//         newArr.push(-1)
//         return newArr;
//     } else {
//         newArr.sort(function(a, b)  {
//   return a - b;
// });
//         return newArr;
//     }
// }