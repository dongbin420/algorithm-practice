const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().split('/n'); // 인풋이 줄이 바뀌어서 들어오면 /n, 띄어쓰기로 들어오면 ' '

let totalWeight = +input;
let count = 0;

while (true) {
    if(totalWeight%5 === 0) {
        console.log(totalWeight / 5 + count);
        break;
    }

    if(0 > totalWeight) {
        console.log(-1);
        break;
    }
    count++;
    totalWeight -= 3;
}

// 이해하기
// 5KG짜리 봉투를 최대한 많이 쓰는 것이 이 문제의 목적이니
// 우선 조건문을 5로 나누었을때 나누어 떨어지는 지 확인하는 것으로
// 만들어준다.
// 위의 조건문이 충족되지 않으면, 3KG짜리를 써야한다는 뜻으로
// 3KG 봉투를 한개씩 쓰면서 총무게에서 3을 빼주며 
// 3KG 봉투를 쓴 count를 하나씩 증가시켜준다.
// 정리하자면, 5kg를 먼저 쓰려고 해보고
// 안되면 3kg를 하나씩 써보면서 나머지 무게를
// 5kg로 사용할 수 있는지를 확인하는 과정을 반복.
// 그러다보면 5kg뿐만 아니라 3kg로도 총무게를 채울 수 없는
// 상황을 마주하게 되는 경우도 있는데(ex 4kg)
// 이때는 자연스럽게 총무게가 0보다 작아지면서 -1를 출력할 수 있게됨.

// 추가적으로, 일반 그리디 문제풀이방법으로 무조건 5kg을 쓰는 경우를 우선으로
// 지정하고 문제를 풀면 해결되지 않는 경우가 있는 문제로, 그리디 문제라고 보기 어렵다.
// ex) 6kg -> 3kg짜리 두개를 써야함.
// 참고 사이트 https://gurtn.tistory.com/55
// 다른 문제 풀어보면서 그리디문제 감을 익히기