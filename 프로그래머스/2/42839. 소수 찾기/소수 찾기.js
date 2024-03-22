function solution(numbers) {
    let answer = 0;
    const numberArr = numbers.split('');
    const numberSet = new Set();
    
    // 소수 구하기
    // Math.sqrt(num)을 범위로 한 이유는, 그 이상의 수에 대해서는
    // Math.sqrt(num)이전에 이미 행해졌고, 검사가 반복되는 것이기에 불필요하다.
    // i < num 으로 검사하는 것보다 최적화된 방법.
    function isPrime(num) {
        if (num < 2) return false;
        
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        
        return true;
    }
    
    // 인풋값으로 만들 수 있는, 중복되지 않는 숫자를 문자열과 재귀 함수를 이용해서 만들기
    function makeNumber(arr, str) {
        if (arr.length > 0) {
            for (let i = 0; i < arr.length; i++) {
                const temp = [...arr];
                temp.splice(i, 1);
                makeNumber(temp, str + arr[i]);
            }
        }
        
        if (str.length > 0) {
            numberSet.add(Number(str));
        }
    }
    
    makeNumber(numberArr, '');
    
    numberSet.forEach((num) => {
        if (isPrime(num)) answer++;
    })
    
    return answer;
}

// function solution(numbers) {
//     const possibleNumbers = [];
//     const nums = numbers.split('');
    
//     const getPermutation = (arr, fixed) => {
//         if (arr.length >= 1) {
//             for (let i = 0; i < arr.length; i++) {
//                 const newNum = fixed + arr[i];
//                 possibleNumbers.push(newNum);
//                 const copyArr = [...arr];
//                 copyArr.splice(i, 1);
//                 getPermutation(copyArr, newNum);
//             }
//         }
//     }
    
//     const getPrimeNumbers = (arr) => {
//         const primes = [];
        
//         for (let i = 0; i < arr.length; i++) {
//             const target = Number(arr[i]);
//             let isPrime = true;
        
//         for (let j = 2; j < target; j++) {
//             if (target % j === 0) {
//                 isPrime = false;

//                 break;
//             }
//         }
        
//         if (isPrime && target !== 1 & target !== 0) {
//             primes.push(target);
//         }
//     }

//         const uniquePrimes = new Set(primes);
        
//         return uniquePrimes;
//     }
    
//     getPermutation(nums, '');
    
//     return getPrimeNumbers(possibleNumbers).size;
// }