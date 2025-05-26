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

// 1, 2, 4 세 개의 수로만 구성되니, 3진법이라고 생각할 수 있다.
// 이렇게 3진법의 수로 변환하려면 3으로 나누면서 나머지 값에 따라
// 1, 2, 4를 추가하면서 변환을 이어갈 수 있다.
// 단, 나머지가 0일때는 result에 0이 아니라 4(값 3)를 추가해줘야 한다.
// 1, 2, 4 나라에는 0이 없기 때문. 
// 그 3의 값을 “윗자리 묶음(몫)”에서 빌려오기 위해 몫을 1만큼 차감하는 것이다.