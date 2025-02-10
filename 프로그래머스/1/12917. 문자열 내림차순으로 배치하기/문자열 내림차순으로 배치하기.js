// 다시 풀기 1
// function solution(s) {
//     const sortedArr = [...s].sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0)).join('');
    
//     return sortedArr;
// }

// 다시 풀기 2
// function solution(s) {
//     return s.split('').sort().reverse().join('');
// }

// 다시 풀기 3
function solution(s) {
    return s.split('').sort((a, b) => {
        if(a > b) {
            return -1;
        } else {
            return 1;
        }
    }).join('');
}
// a > b 처럼 대소 비교로는 알파벳 순서를 비교할 수 있는데,
// 단순 a - b 처럼 연산으로는 계산이 힘들다. 그래서 조건문을
// 이용해야하는 것.


// localeCompare 사용법
// b.localeCompare(a)에서, a와 b값을 일반적인 알파벳 순서를
// 기준으로 비교하고 b가 a보다 알파벳 순서상 앞에 있으면
// 음수를 반환하고 b가 a보다 알파벳 순서상 뒤에 있으면
// 양수를 반환한다. 

// sort 다시 학습
// sort 메서드의 반환 값이 양수면 b가 앞에 오고, a가 그 뒤에 온다
// 음수면 a가 앞에 오고, b가 그 뒤에 온다

// 근데, 그런거 상관없이
// sort((a, b) => a - b) 는 오름차순,
// sort((a, b) => b - a) 는 내림차순,
// sort((a, b) => a.localeCompare(b)) 는 알파벳 오름차순,
// sort((a, b) => b.localeCompare(a)) 는 알파벳 내림차순
// 이라고 외우고(?)
// sort((a, b) => (a % 2) - (b % 2))와 같은 경우를
// 특수한 정렬이라고 판단하고 
// 1. a와 b는 짝수와 홀수로 판단
// 2. 짝수면 괄호 값이 0, 홀수면 1이 됨
// 3. a가 짝수이고 b가 홀수이면 값은 음수 -> a가 앞에 옴
// 4. a가 홀수이고 b가 짝수이면 값은 양수 -> b가 앞에 옴
// 5. 두 경우 둘다 짝수가 앞에 오는 결과를 가져옴
// 6. 짝수가 앞쪽, 홀수가 뒤쪽에 오게끔 정렬 된다 라고 결론 내릴 수 있음

// 이문제에서는 localeCompare를 사용하는 것이 적절하지 않다고 판단.
// charCodeAt은 문자를 아스키 코드로 바꾸는데, 이를 이용해서
// 내림차순으로 정렬하는 방향으로 문제를 풀면 됨.
// 이렇게 하면 또한 대문자가 소문자보다 작게 여겨지게끔 하는 부분도
// 커버할 수 있는데, 가장 마지막 알파벳인 z인 경우도 대문자 Z의 아스키 코드는 90, 가장 첫번째 알파벳인 a의 소문자는 97로 대문자가 항상 더 작게 여겨짐.

// 첫 풀이
// function solution(s) {
//     let newStr = '';
//     let newStr2 = '';
//     let newArr = [];
//     let newArr2 = []
//     for(let i = 0; i < s.length; i++) {
        
//         if(s[i] === s[i].toLowerCase()) {
//             newArr.push(s[i])
//         } else {
//             newArr2.push(s[i])
//         }
//     }
//     newArr.sort(function(a,b) {
//         if(a > b) {
//             return -1;
//         } else {
//             return 1;
//         }
        
//     });
//     newArr2.sort(function(a,b) {
//         if(a > b) {
//             return -1;
//         } else {
//             return 1;
//         }
        
//     });
//     for(let j = 0; j < newArr.length; j++) {
//         newStr = newStr + newArr[j]
//     }
//     for(let j = 0; j < newArr2.length; j++) {
//         newStr2 = newStr2 + newArr2[j]
//     }
//     return newStr+newStr2;
// }