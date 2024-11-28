function solution(rectangle, characterX, characterY, itemX, itemY) {
    const SIZE = 102;
    const map = Array.from({ length: SIZE }, () => Array(SIZE).fill(0));
    const visited = Array.from({ length: SIZE }, () => Array(SIZE).fill(false));
    
    for (const [x1, y1, x2, y2] of rectangle) {
        const [sx, sy, ex, ey] = [x1 * 2, y1 * 2, x2 * 2, y2 * 2];
        for (let x = sx; x <= ex; x++) {
            for (let y = sy; y <= ey; y++) {
                if (x === sx || x === ex || y === sy || y === ey) {
                    if (map[x][y] !== 2) map[x][y] = 1; // 테두리
                } else {
                    map[x][y] = 2; // 내부
                }
            }
        }
    }
    
    const queue = [[characterX * 2, characterY * 2, 0]];
    visited[characterX * 2][characterY * 2] = true;
    const directions = [
        [0, 1], [0, -1], [1, 0], [-1, 0]
    ];
    
    while (queue.length > 0) {
        const [x, y, dist] = queue.shift();
        
        if (x === itemX * 2 && y === itemY * 2) {
            return dist / 2;
        }
        
        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;
            
            if (nx > 0 && ny > 0 && nx < SIZE && ny < SIZE && map[nx][ny] === 1 && !visited[nx][ny]) {
                visited[nx][ny] = true;
                queue.push([nx, ny, dist + 1]);
            }
        }
    }
}

// 완전하게 이해하지 못한 부분이 있음(다음에 다시 시도)
// 1. SIZE를 두 배로 확장하는 이유
// 2. map을 구성하는 for문 로직