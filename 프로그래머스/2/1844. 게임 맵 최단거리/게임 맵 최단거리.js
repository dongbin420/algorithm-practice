function solution(maps) {
    const row = maps.length;
    const col = maps[0].length;
    const visited = Array.from( {length: row}, () => Array(col).fill(false));
    const directions = [
        [0, 1], [0, -1], [1, 0], [-1, 0]
    ];
    const queue = [[0, 0, 1]];
    
    while (queue.length > 0) {
        const [x, y, dist] = queue.shift();
        
        if (x === row - 1 && y === col - 1) {
            return dist;
        }
        
        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;
            
            if (nx >= 0 && nx < row && ny >= 0 && ny < col && maps[nx][ny] === 1 && !visited[nx][ny]) {
                visited[nx][ny] = true;
                queue.push([nx, ny, dist + 1]);
            }
        }
    }
    
    return -1;
}














// 최단 경로 문제이므로, bfs가 적절함.
// function solution(maps) {
//     const row = maps.length;
//     const col = maps[0].length;
//     const visited = Array.from({ length: row }, () => Array(col).fill(false));
//     const directions = [
//         [0, 1], [0, -1], [1, 0], [-1, 0]
//     ];
//     const queue = [[0, 0, 1]];
    
//     while (queue.length > 0) {
//         const [x, y, dist] = queue.shift();
//         visited[x][y] = true;
        
//         if (x === row - 1 && y === col - 1) {
//             return dist;
//         }
        
//         for (const [dx, dy] of directions) {
//             const nx = x + dx;
//             const ny = y + dy;
            
//             if (nx >= 0 && nx < row && ny >= 0 && ny < col && !visited[nx][ny] && maps[nx][ny] === 1) {
//                 queue.push([nx, ny, dist + 1]);
//                 visited[nx][ny] = true;
//             }
//         }
//     }
    
//     return -1;
// }