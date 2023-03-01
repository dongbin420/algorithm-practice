// function solution(numbers, k) {
//     if(2*(k-1) > numbers.length-1) { // 2*(k-1) 은 number 가 무제한일때 답의 인덱스 번호
//         return numbers[2*(k-1) - numbers.length*(Math.floor(2*(k-1)/numbers.length))]; // 이렇게 하면 딱 한바퀴만 제거할텐데, 2*(k-1)/numbers.length를 해서 몫 만 남긴 값을 numbers.length 에 곱해주면 적절히 빼줌.
//     } else {
//      return numbers[2*(k-1)];
//     }
// }

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

// 채점 이후
// 답이 맞았지만, 솔직히 이게 적절한 풀이는 아닌거같긴함 ㅎㅎ..

function solution(numbers, k) {
    let getBall = 1; // 인덱스값찾으려면 0 , 선수번호는 1
// 첫 번째 선수가 공을 갖고있음 (첫번째 선수는 0번째 인덱스)
for(let i = 0; i < k-1; i++) { // k가 5면, 0 1 2 3로 4번. 
    getBall += 2; // 한번 던질때 마다 2씩 늘어나고, 따라서 getBall은 인덱스 값이 됨.
    // 인덱스 값이 numbers의 최대 인덱스 값을 넘어가는 경우를 생각해야함
    if(getBall > numbers.length) { // 인덱스값 찾으려면 numbers.length-1, 선수번호는 그냥 numbers.length
        getBall -= numbers.length // 인덱스값이 최대인덱스를 넘어갈때마다 numbers의 길이만큼 빼면 그 다음차례 인덱스 값이 돰.
    }
}
    return getBall;
}