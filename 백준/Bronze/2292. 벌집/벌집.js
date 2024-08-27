const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs.readFileSync(filePath).toString();

let numInput = Number(input);
let currentRoom = 1;
let roomCnt = 1;

while (true) {
  if (numInput <= currentRoom) {
    console.log(roomCnt);

    break;
  }

  currentRoom += 6 * roomCnt;
  roomCnt++;
}
