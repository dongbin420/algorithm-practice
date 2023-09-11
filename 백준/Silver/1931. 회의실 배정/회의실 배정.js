const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// let numOfCon = +input[0];
// console.log(numOfCon);

const [n, ...arr] = input;
let answer = 0;
const times = arr
  .map((num) => num.split(" ").map((num) => +num))
  .sort((a, b) => {
    // 끝나는 시간 기준으로 오름차순 정렬
    if (a[1] === b[1]) {
      return a[0] - b[0]; // 끝나는 시간이 같으면 시작 시간 기준으로 오름차순 정렬(그리디 개념에 따라 일찍 시작하는 시간 먼저 정렬)
    } else {
      return a[1] - b[1]; // 끝나는 시간 기준으로 오름차순 정렬
    }
  });

let finishTime = 0;
times.forEach((time) => {
  if (time[0] >= finishTime) {
    answer++;
    finishTime = time[1];
  }
});

console.log(answer);

// 결론
// 그리디 문제. (그때 그때 최고의 선택- 일찍시작하거나 일찍끝남)
// 매번 끝나는 시간이 빠른 선택을 하기위해(최선의 선택)
// 끝나는 시간을 오름차순으로 정렬
// 하지만, 끝나는 시간이 같은 경우에만
// 최선의 선택은 시작시간이 빠른게 그 순간의 최선의 선택이므로
// 시작시간을 오름차순으로 정렬
