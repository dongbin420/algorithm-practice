// 다시 풀기(아래 풀이랑 같은 방식)
function solution(numbers) {
    let answer = 0;
    const used = Array(numbers.length).fill(false);
    const numberSet = new Set();
    
    const checkIsPrime = (num) => {
        if (num < 2) return false;
        
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        
        return true;
    }
    
    const makeNum = (str) => {
        if (str.length > 0) {
            numberSet.add(Number(str));
        }
        
        for (let i = 0; i < numbers.length; i++) {
            if (!used[i]) {
                used[i] = true;
                makeNum(str + numbers[i]);
                used[i] = false;
            }
        }
    }
    
    makeNum('');
    
    for (const num of numberSet) {
        if (checkIsPrime(num)) {
            answer++;
        }
    }
    
    return answer;
}

// function solution(numbers) {
//     let answer = 0;
//     const numberArr = Array(numbers.length).fill(false);
//     const numberSet = new Set();
    
//     const isPrimeNum = (num) => {
//         if (num === 1 || num === 0) {
//             return false;
//         }
        
//         for (let i = 2; i < num; i++) {
//             if (num % i === 0) return false;
//         }
        
//         return true;
//     }
    
//     // 아래의 다른 풀이 방법보다, 나는 이 방법이 더 직관적으로 이해가 됨.(방문 배열 사용)
//     const makeNumber = (str) => {
//         if (str.length > 0) {
//             numberSet.add(Number(str));
//         }
        
//         for (let i = 0; i < numbers.length; i++) {
//             if (!numberArr[i]) {
//                 numberArr[i] = true;
//                 makeNumber(str + numbers[i]); // 매개변수 순서: '1', '17' ->(1과 7이 다시 false로 백트래킹 -> 다시 매개변수 '7', '71')
//                 numberArr[i] = false;
//             }
//         }
//     }
    
//     makeNumber('');
    
//     for (const num of numberSet) {
//         if (isPrimeNum(num)) {
//             answer++;
//         }
//     }
    
//     return answer;
// }

// 오래 전에 풀었던 방식
// function solution(numbers) {
//     let answer = 0;
//     const numberArr = numbers.split('');
//     const numberSet = new Set();
    
//     // 소수 구하기
//     // Math.sqrt(num)을 범위로 한 이유는, 그 이상의 수에 대해서는
//     // Math.sqrt(num)이전에 이미 행해졌고, 검사가 반복되는 것이기에 불필요하다.
//     // i < num 으로 검사하는 것보다 최적화된 방법.
// 소수는 1과 자기 자신 말고는 약수가 없는 수이므로,

// (Math.sqrt(num)로 판별해도 소수 판별을 정확히 할 수 있는 이유)
// 2부터 
// 루트 n까지 어떤 수로도 나누어떨어지지 않는다면,
// 루트 n을 초과하는 수로도 나누어떨어질 일이 절대 없게 됩니다.
// 따라서 
// 루트 n까지만 검사해도, 그 이상의 범위는 검사하지 않아도 소수 여부를 정확하게 판별할 수 있습니다.
// ex) 36과 루트36인 6을 대상으로 이를 생각해보면 쉽게 이해가능.(2부터 6까지 나눠봐도 약수가 없다면, 그 이후의 수로도 나누어 떨어지지 않는다.)
//     function isPrime(num) {
//         if (num < 2) return false;
        
//         for (let i = 2; i <= Math.sqrt(num); i++) {
//             if (num % i === 0) return false;
//         }
        
//         return true;
//     }
    
//     // 인풋값으로 만들 수 있는, 중복되지 않는 숫자를 문자열과 재귀 함수를 이용해서 만들기
//     function makeNumber(arr, str) {
//         if (arr.length > 0) {
//             for (let i = 0; i < arr.length; i++) {
//                 const temp = [...arr];
//                 temp.splice(i, 1);
//                 makeNumber(temp, str + arr[i]);
//             }
//         }
        
//         if (str.length > 0) {
//             numberSet.add(Number(str));
//         }
//     }
    
//     makeNumber(numberArr, '');
    
//     numberSet.forEach((num) => {
//         if (isPrime(num)) answer++;
//     })
    
//     return answer;
// }