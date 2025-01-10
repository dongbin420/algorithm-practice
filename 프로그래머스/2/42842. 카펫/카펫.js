// 가장 우선 생각해야할 것
// 전체 격자는 brown과 yellow 격자로만 이루어져 있다. 그래서 brown + yellow로 모든 격자의 수를 합치면 전체 격자의 넓이가 됨을 알아야 한다. 
// 이에 따라, 반환 값이 되는 가로 세로를 곱하면 넓이가 되는 것 또한 인지하고 있으면 된다.

function solution(brown, yellow) {
    const area = brown + yellow;
    
    // 카펫 크기는 최소 3*3이어야 하므로, 3부터 검사함
    for (let i = 3; i <= area; i++) {
        // i를 카펫의 높이로 생각, 약수라고 생각하고 width를 구함
        if (area % i === 0) {
            const width = area / i;
            const isWidthBigger = width >= i;
            const isYellowRight = (width - 2) * (i - 2) === yellow;
            if (isWidthBigger && isYellowRight) {
                return [width, i];
            }
        }
    }
}


// 처음 풀었던 방식(정답이지만, 매우 비효율적)
// function solution(brown, yellow) {
//     const area = brown + yellow;
    
//     for (let i = 1; i <= area; i++) {
//         for (let j = 1; j <= area; j++) {
//             const con1 = i * j === area;
//             const con2 = i >= j;
//             const con3 = (i - 2) * (j - 2) === yellow;
            
//             if (con1 && con2 && con3) {
//                 return [i, j];
//             }
//         }
//     }
// }