function solution(balls, share) {
    let n = 1;
    let m = 1;
    let a = 1;

for(let i = 1; i<=balls; i++) {
    n = n*i
}

for(let j = 1; j<=balls-share; j++) {
    m = m*j
}

for(let k = 1; k<=share; k++) {
    a = a*k
}
    
    return Math.round(n/(m*a));
}

// 의사코드
// 입력: 머쓱이가 갖고 있는 구슬의 개수 balls, 친구들에게 나누어 줄 구슬 개수 share
// 출력: balls개의 구슬 중 share개의 구슬을 고르는 가능한 모든 경우의 수