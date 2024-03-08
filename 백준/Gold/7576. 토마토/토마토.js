const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(line => line.replace(/\r/g, ''));

const [M, N] = input.shift().split(' ').map(Number);
const BOX = input.map((row) => row.split(' ').map(Number));

const queue = [];
const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];
let days = -1;
let unripeCount = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (BOX[i][j] === 0) {
      unripeCount++;
    } else if (BOX[i][j] === 1) {
      queue.push([i, j, 0]);
    } 
  }
}

if (unripeCount === 0) {
  console.log('0');
} else {
  let idx = 0;

  while (queue.length !== idx) {
    const [x, y, day] = queue[idx];
    days = day;

    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if (nx >= 0 && nx < N && ny >= 0 && ny < M && BOX[nx][ny] === 0) {
        BOX[nx][ny] = 1;
        queue.push([nx, ny, day + 1]);
        unripeCount--; 
      }
    }

    idx++;
  }

  if (unripeCount === 0) {
    console.log(days);
  } else {
    console.log('-1');
  }
}