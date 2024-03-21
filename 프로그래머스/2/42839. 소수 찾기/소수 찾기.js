function solution(numbers) {
    const possibleNumbers = [];
    const nums = numbers.split('');
    
    const getPermutation = (arr, fixed) => {
        if (arr.length >= 1) {
            for (let i = 0; i < arr.length; i++) {
                const newNum = fixed + arr[i];
                possibleNumbers.push(newNum);
                const copyArr = [...arr];
                copyArr.splice(i, 1);
                getPermutation(copyArr, newNum);
            }
        }
    }
    
    const getPrimeNumbers = (arr) => {
        const primes = [];
        
        for (let i = 0; i < arr.length; i++) {
            const target = Number(arr[i]);
            let isPrime = true;
        
        for (let j = 2; j < target; j++) {
            if (target % j === 0) {
                isPrime = false;

                break;
            }
        }
        
        if (isPrime && target !== 1 & target !== 0) {
            primes.push(target);
        }
    }

        const uniquePrimes = new Set(primes);
        
        return uniquePrimes;
    }
    
    getPermutation(nums, '');
    
    return getPrimeNumbers(possibleNumbers).size;
}