function solution(numbers) {
    let answer = 0;
    const numberArr = Array(numbers.length).fill(false);
    const numberSet = new Set();
    
    const isPrimeNum = (num) => {
        if (num === 1 || num === 0) {
            return false;
        }
        
        for (let i = 2; i < num; i++) {
            if (num % i === 0) return false;
        }
        
        return true;
    }
    
    const makeNumber = (str) => {
        if (str.length > 0) {
            numberSet.add(Number(str));
        }
        
        for (let i = 0; i < numbers.length; i++) {
            if (!numberArr[i]) {
                numberArr[i] = true;
                makeNumber(str + numbers[i]);
                numberArr[i] = false;
            }
        }
    }
    
    makeNumber('');
    
    for (const num of numberSet) {
        if (isPrimeNum(num)) {
            answer++;
        }
    }
    
    return answer;
}















// 오래 전에 풀었던 방식
// function solution(numbers) {
//     let answer = 0;
//     const numberArr = numbers.split('');
//     const numberSet = new Set();
    
//     // 소수 구하기
//     // Math.sqrt(num)을 범위로 한 이유는, 그 이상의 수에 대해서는
//     // Math.sqrt(num)이전에 이미 행해졌고, 검사가 반복되는 것이기에 불필요하다.
//     // i < num 으로 검사하는 것보다 최적화된 방법.
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