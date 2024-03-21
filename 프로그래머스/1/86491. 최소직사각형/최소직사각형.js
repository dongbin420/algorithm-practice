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