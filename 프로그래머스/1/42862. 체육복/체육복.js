// 개선한 풀이
// 기존 풀이에선 lost와 reserve를 splice를 통해 배열을 직접 변경,
// 배열의 길이를 이용해 정답 도출.
// 개선한 풀이에선, 배열을 직접 수정하지 않고 투 포인터(lost 배열과, reserve 배열의 인덱스를 각각 조회하는 방식)를 이용해 원본 배열을 보존할 수 있어, 디버깅이나 유지보수에 더 나은 선택
function solution(n, lost, reserve) {
    const newLost = lost.filter((student) => !reserve.includes(student)).sort((a, b) => a - b);
    const newReserve = reserve.filter((student) => !lost.includes(student)).sort((a, b) => a - b);
    
    let matches = 0;
    let i = 0;
    let j = 0;
    
    while (i < newLost.length && j < newReserve.length) {
        if (Math.abs(newLost[i] - newReserve[j]) === 1) {
            matches++;
            i++;
            j++;
        } else if (newLost[i] > newReserve[j]) {
            j++;
        } else {
            i++;
        }
    }
    
    return n - newLost.length + matches;
}

// 처음으로 푼 방식(정답은 맞음)
// function solution(n, lost, reserve) {
//     const newLost = lost.filter((student) => !reserve.includes(student)).sort((a, b) => a - b);
//     const newReserve = reserve.filter((student => !lost.includes(student))).sort((a, b) => a - b);
    
//     for (let i = 0; i < newLost.length; i++) {
//         const candidStudent1 = newLost[i] - 1;
//         const candidStudent2 = newLost[i] + 1;
        
//         if (newReserve.includes(candidStudent1)) {
//             const idx = newReserve.indexOf(candidStudent1);
//             newLost.splice(i, 1);
//             newReserve.splice(idx, 1);
            
//             i--;
//         } else if (newReserve.includes(candidStudent2)) {
//             const idx = newReserve.indexOf(candidStudent2);
//             newLost.splice(i, 1);
//             newReserve.splice(idx, 1);
            
//             i--;
//         }
//     }
    
//     return n - newLost.length;
// }

// 이 문제가 그리디 문제인 이유
// 정렬된 lost와 reserve를 순회하면서,
// reserve 학생이 lost 학생에게 체육복을 빌려줄 수 있는지
// 확인 후 바로 빌려준다. 이 과정을 반복하면서,
// 가장 많은 학생이 체육복을 입을 수 있는 최대 값을
// 찾는건데 이 '각 상황'에 체육복을 빌려줄 수 있으면
// 바로 빌려주는 행위가 결론적으로 최대 학생 수를 보장하므로
// 그리디 문제라 볼 수 있다.