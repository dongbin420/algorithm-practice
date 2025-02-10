// 다시 풀기
function solution(numbers) {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].filter((num) => !numbers.includes(num)).reduce((sum, cur) => sum + cur, 0);
}

// 이전 풀이
// function solution(numbers) {
//     let num = 0;
//     for(let i = 0; i <= 9; i++) {
//         if(!numbers.includes(i)) {
//             num = num + i;
//         }
//     }
//     return num;
// }