const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const N = +input.shift(); //shift 메서드는  원본 배열에서 첫 번째 요소를 제거하고 제거한 요소를 반환한다. 원본 배열을 직접 변경한다.

// console.log(N); // 제거한 요소 반환
// console.log(input); // 제거 후 변경된 원본 배열, 제거 되었으니 input[0]의 값은 사라짐. -> input[0] = 3 7
const paper = new Array(100); //100의 길이의 배열 생성

for(i=0; i<100; i++) {
    paper[i] = new Array(100);
}

let cnt = 0;

for(i=0; i<N; i++) {
    const [X, Y] = input[i].split(' ').map(x => +x);
    for(j=X; j<X+10; j++) {
        for(k=Y; k<Y+10; k++) {
            if(!paper[j][k]) {
                paper[j][k] = true;
                cnt++;
            }
        }
    }
}

console.log(cnt);