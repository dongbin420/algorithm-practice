function solution(sizes) {
    let horizontalMax = 0;
    let verticalMax = 0;
    
    for (let i = 0; i < sizes.length; i++) {
        const bigger = Math.max(sizes[i][0], sizes[i][1]);
        const smaller = Math.min(sizes[i][0], sizes[i][1]);
        
        if (bigger > horizontalMax) {
            horizontalMax = bigger;
        }
        
        if (smaller > verticalMax) {
            verticalMax = smaller;
        }
    }
    
    return horizontalMax * verticalMax;
}

// function solution(sizes) {
//     const horizontal = []
//     const vertical = [];
    
//     for (let i = 0; i < sizes.length; i++) {
//         horizontal.push(Math.max(sizes[i][0], sizes[i][1]));
//         vertical.push(Math.min(sizes[i][1], sizes[i][0]));
//     }
    
//     return Math.max(...horizontal) * Math.max(...vertical);
// }

// 쉽게 생각해서, 모든 명함의 긴변 중 가장 긴 크기와 모든 명함의 짧은 면 중 가장 긴 크기를 조합해야 모든 명함을 다 수용하면서도 가장 작은 크기의 지갑이 완성된다. 

// 오래전에 푼 방식
// function solution(sizes) {
//     const widths = [];
//     const heights = [];
    
//     for (let i = 0; i < sizes.length; i++) {
//         const first = sizes[i][0];
//         const second = sizes[i][1];
        
//         if (first < second) {
//             sizes[i][0] = second;
//             sizes[i][1] = first;
//         }
//     }
    
//     for (let i = 0; i < sizes.length; i++) {
//         widths.push(sizes[i][0]);
//         heights.push(sizes[i][1]);
//     }
    
//     const resultWidth = Math.max(...widths);
//     const resultHeight = Math.max(...heights);
    
//     return resultWidth * resultHeight;
// }

// 메인로직: 모든 명함에 대해, 가로가 세로보다 작으면 가로크기와 세로크기를
// 바꿔, 위치를 조정해서 모든 명함이 비교 가능할 수 있게끔 조정해주어야 한다.
// 이후, 조정된 배열에서 가장 긴 가로와 세로를 찾아 이를 곱해주면 된다.