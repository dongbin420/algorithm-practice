function solution(emergency) {
    let answer = [];
    let arr = [...emergency].sort((a, b) => b - a);

    for(i=0; i<emergency.length; i++) {
        for(j=0; j<arr.length; j++) {
            if(emergency[i] === arr[j]) {
                answer.push(j+1)
            }
        }
    }
    return answer;
}

// 그냥 sort를 적용하면 본래의 배열도 변형이됨.. 그러므로 ...(spread 이용)