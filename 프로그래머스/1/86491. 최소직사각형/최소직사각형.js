function solution(sizes) {
    const widths = [];
    const heights = [];
    
    for (let i = 0; i < sizes.length; i++) {
        const first = sizes[i][0];
        const second = sizes[i][1];
        
        if (first < second) {
            sizes[i][0] = second;
            sizes[i][1] = first;
        }
    }
    
    for (let i = 0; i < sizes.length; i++) {
        widths.push(sizes[i][0]);
        heights.push(sizes[i][1]);
    }
    
    const resultWidth = Math.max(...widths);
    const resultHeight = Math.max(...heights);
    
    return resultWidth * resultHeight;
}

// 메인로직: 모든 명함에 대해, 가로가 세로보다 작으면 가로크기와 세로크기를
// 바꿔, 위치를 조정해서 모든 명함이 비교 가능할 수 있게끔 조정해주어야 한다.
// 이후, 조정된 배열에서 가장 긴 가로와 세로를 찾아 이를 곱해주면 된다.