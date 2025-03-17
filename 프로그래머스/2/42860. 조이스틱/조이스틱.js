function solution(name) {
    let totalControl = 0;
    const length = name.length;
    
    for (let i = 0; i < length; i++) {
        const diff = name.charCodeAt(i) - 'A'.charCodeAt(0);
        const reverseDiff = 26 - diff;
        
        totalControl += Math.min(diff, reverseDiff);
    }
    
    let horizontalMove = length - 1;
    
    for (let j = 0; j < length; j++) {
        let nextIdx = j + 1;
        
        while (name[nextIdx] === 'A') {
            nextIdx++;
        }
        
        horizontalMove = Math.min(horizontalMove, j*2 + (length - nextIdx), (length - nextIdx)*2 + j);
    }
    
    totalControl += horizontalMove;
    
    return totalControl;
}

// 풀이
// 조이스틱의 수직 이동(알파벳 이동), 수평 이동(커서 이동)의 최소값을 각각 구하고 이를 더하면 문제를 해결할 수 있다.
// 수직 이동은, 각 문자를 바꾸는 이동으로, 단순히 A에서 타겟 문자까지의 정방향 순번 횟수와 역방향 순번 횟수 중 더 작은걸 선택하면 된다. (EX Z가 타겟 문자이면 A에서 역방향으로 한 번만 이동하는게 가장 효율적)

// 수평 이동은, 커서를 옮기는 이동으로, 정방향 루트는 그냥 문자열 길이 - 1을 한 값이 된다. 하지만, 타겟 문자가 A인 경우 바꿀 필요가 없으므로 역방향 등을 이용해서 조작 횟수를 최소화해서 이동할 수 있다. 예시를 보면서 이해해보자.
// 주어진 문자열이 'BBBAAAB'인 경우
// 정방향 이동은 오른쪽으로 순서대로 이동하는 경우이므로 6회이다.
// 두번째 방법은 처음부터 A가 나오기 직전까지 이동 후, 다시 뒤로 돌아가는 방법이다. 
// 이를 식으로 만들 수 있는데, 
// (인덱스 0에서 앞으로 이동하면서 A가 나오기 직전까지 이동 횟수) * 2 + (인덱스 0에서 뒤로 이동하면서 A가 나오기 직전까지 이동 횟수) 로 만들 수 있다.
// 세번째 방법은 처음부터 뒤로 돌아간다음 다시 인덱스 0이로 돌아온 후 정상 이동을 하는 방법이다. 식으로는,
// (인덱스 0에서 뒤로 이동하면서 A가 나오기 직전까지 이동 횟수) * 2 + (인덱스 0에서 앞으로 이동하면서 A가 나오기 직전까지 이동 횟수)

// 그리고, 이 세 경우 중 가장 작은 횟수를 선택하면 원하는 답을 얻을 수 있다.