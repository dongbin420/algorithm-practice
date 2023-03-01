function solution(numbers, k) {
    if(2*(k-1) > numbers.length-1) { // 2*(k-1) 은 number 가 무제한일때 답의 인덱스 번호
        return numbers[2*(k-1) - numbers.length*(Math.floor(2*(k-1)/numbers.length))]; // 이렇게 하면 딱 한바퀴만 제거할텐데, 2*(k-1)/numbers.length
    } else {
     return numbers[2*(k-1)];
    }
}

// 입력: 친구들의 번호가 들어있는 정수 배열 numbers
// 정수 k (이 k 번째로 공을 던지는 사람의 번호를 구해야함)
// 출력: k번째로 공을 던지는 사람의 번호를 출력.

// 의사코드
// numbers가 4개의 배열일때, k가 1이면, [0]번째
// k가 2이면, [2]번째
// k가 3이면, [4]번째여야 하는데, 없어서 다시 [0]번째
// k가 4이면, [6]번쨰여야 하는데, 다시 [2]번째
// k가 5이면, [8]번째가, [0]번째
// numbers의 length가 짝수면 0 2 0 2 (4)-> 0 2 4 0 2 4 (6)-> 0 2 4 6 (8)

// numbers의 length가 홀수면 0 2 1 0 2 1 (3) -> 0 2 4 1 3 0 2 4 1 3 (5) -> 0 2 4 6 1 3 5 0 2 4 6 1 3 5

[1,2,3,4,5,6,7]