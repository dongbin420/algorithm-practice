function solution(sizes) {
    let width = 0;
    let height = 0;
    
    for (let i = 0; i < sizes.length; i++) {
        const bigger = Math.max(sizes[i][0], sizes[i][1]);
        const smaller = Math.min(sizes[i][0], sizes[i][1]);
        
        if (width < bigger) {
            width = bigger;
        }
        
        if (height < smaller) {
            height = smaller;
        }
    }
    
    return width * height;
}

// 지갑의 한 변은 어떤 명함의 한 변보다 작아서는 안된다.(최소한 둘 중 한 변보다는 커야한다.)
// 위와 같은 전제에서, 명함들은 두 변을 가질 것이고, 지갑의 긴 변은 명함들의 긴 변의 조합의 최댓값의 길이 이하이면 안된다. 따라서, 지갑의 긴 변(가로)는 명함들의 긴 변들의 조합의 최댓값이 목적을 충족하는 최소 길이가 된다.
// 마찬가지로, 지갑의 남은 짧은 변은 명함들의 짧은 변 조합의 최댓값의 길이 이하이면 안된다. 따라서 지갑의 짧은 변(세로)는 명함들의 짧은 변들의 조합의 최댓값이 목적을 충족하는 최소 길이가 된다.

// 두번째 풀이
// function solution(sizes) {
//     let horizontalMax = 0;
//     let verticalMax = 0;
    
//     for (let i = 0; i < sizes.length; i++) {
//         const bigger = Math.max(sizes[i][0], sizes[i][1]);
//         const smaller = Math.min(sizes[i][0], sizes[i][1]);
        
//         if (bigger > horizontalMax) {
//             horizontalMax = bigger;
//         }
        
//         if (smaller > verticalMax) {
//             verticalMax = smaller;
//         }
//     }
    
//     return horizontalMax * verticalMax;
// }

// 첫번째 풀이
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