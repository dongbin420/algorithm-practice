function solution(n) {
    let result = '';
    
    while (n > 0) {
        const quot = Math.floor(n / 3);
        const rem = n % 3;
        
        if (rem === 1) {
            result += '1';
            n = quot;
        } else if (rem === 2) {
            result += '2';
            n = quot;
        } else if (rem === 0) {
            result += '4';
            n = quot - 1;
        }
    }
    
    return Array.from(result).reverse().join('');
}