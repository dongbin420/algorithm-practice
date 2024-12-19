function solution(numbers) {
    const newNumbers = numbers.map(String);
    newNumbers.sort((a, b) => (b + a) - (a + b));
    const result = newNumbers.join('');
    
    return result[0] === '0' ? '0' : result;
}