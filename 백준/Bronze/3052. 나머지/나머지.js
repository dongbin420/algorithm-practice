const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const items = input.map((item) => +item);

const answer = Array(42).fill(0); // 42개짜리(나머지가 나오는 경우의 수) 배열을 만드는데, 모든 값이 0임.

for(let i=0; i < 10; ++i) {
    const nowChar = +items[i]%42; // input순서대로 나머지 값이 들어감(10개)
    answer[nowChar]++; // answer(나머지) ex) 나머지가 1이면 2번째배열에 1이 더해짐, 나머지가 36이면 37번째 배열에 1이 더해짐. 
}

let cnt = 0;
for(let i=0; i < answer.length; ++i) {
    if(answer[i] !==0) {
        cnt++ //answer[0] 부터 answer[41] 까지 검사해서 각각 값을 검사하고, 나머지가 존재하면 카운트가 올라가고 존재하지않으면 카운트가 그대로인 느낌. 그래서 만약에 10개 값이 다 다르다면 10개가 0이 아닌채로 존재할거고 카운트는 10이 된다.
    }
}

console.log(cnt);